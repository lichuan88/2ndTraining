<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import {
  admins,
  dormitories,
  recadminlist,
  identity_cards,
  adminer,
  identity_List,
} from "../types/response-data";
import {
  GetIndentityCards,
  GetIndentityList,
  // GetNetAdmin,
  GetRecAdmin,
} from "../api/methods/netadmin";
import { useRequest } from "alova";
const dormitories = ref<dormitories[]>();
const admins = ref<admins[]>();
const activeName = ref("1");
const openDialog = ref<boolean>(false);
const currentAdmin = ref(""); //对话框中名字
const recadminlists = ref<recadminlist>({
  grade1: "",
  grade2: "",
});
//获取网管列表
// const { onSuccess: GetNetAdminSuccess } = useRequest(() => GetNetAdmin());
// GetNetAdminSuccess((response) => {
//   dormitories.value = response.data.data;
//   console.log(dormitories.value);
// });
//获取推荐网管列表
const { onSuccess: GetRecAdminSuccess } = useRequest(() => GetRecAdmin());
GetRecAdminSuccess((response) => {
  recadminlists.value = response.data.data;
  console.log(recadminlists.value);
});
//获取网管列表  下拉框列表
const IdentityCards = ref<identity_cards[]>();
const { onSuccess: GetIndentityCardsSuccess } = useRequest(() =>
  GetIndentityCards()
);
GetIndentityCardsSuccess((response) => {
  IdentityCards.value = response.data.data;
  console.log(IdentityCards.value);
});
////获取身份组中 点开下拉框 获取卡片
const adminers = ref<adminer[]>([]);
const IdentityList = ref<identity_List>({
  identity_group_id: "",
  identity_group: "",
  admins: [],
});
const { onSuccess, send: updateIdentityList } = useRequest(
  (id: string) => GetIndentityList(id),
  {
    immediate: false,
    shareRequest: false,
    cache: false,
  }
);
//下拉后 调用函数
const handleChange = (id: string) => {
  updateIdentityList(id);
};
onSuccess((response) => {
  IdentityList.value = response.data.data;
  adminers.value = IdentityList.value.admins;
  console.log(IdentityList.value);
});
onMounted(() => {
  // 不需要手动添加事件监听器
});
//电话
const callnumber = ref<string>("");
const callshortnumber = ref<string | undefined>("");
const callnumberherf = ref(`tel:${callnumber}`);
const callshortnumberherf = ref(`tel:${callshortnumber}`);
const smsnumberherf = ref(`sms:${callnumber}`);
watch([callnumber, callshortnumber], () => {
  callnumberherf.value = `tel:${callnumber.value}`;
  callshortnumberherf.value = `tel:${callshortnumber.value}`;
  smsnumberherf.value = `sms:${callnumber.value}`;
});
</script>
<template>
  <div class="w-full justify-center flex pt-20 contianer">
    <div class="w-80%">
      <div
        class="w-80% flex justify-center items-center flex-col mb-1 p-2"
        style="
          background-color: rgb(234, 240, 245);
          margin: auto;
          border-radius: 5px;
        "
      >
        <p style="font-size: 15px; color: #405779">网管通讯录</p>
        <p>温馨提示： 点击人员自动拨号</p>
        <p class="text-red">
          请优先寻找{{ recadminlists.grade1 }},{{ recadminlists.grade2 }}级网管
        </p>
      </div>
      <div class="w-full mt-10 mb-25">
        <el-collapse
          v-model="activeName"
          accordion
          v-for="card in IdentityCards"
          :key="card.identity_group"
          class="w-full"
        >
          <el-collapse-item
            :name="card.identity_group"
            class="w-full"
            :title="card.identity_group"
            @click="handleChange(card.identity_group_id)"
            style="margin-bottom: 1px; border-radius: 10px"
          >
            <template #title>
              <img
                src="../img/分组.png"
                alt=""
                style="
                  width: 15px;
                  height: 15px;
                  margin-right: 10px;
                  margin-left: 10px;
                "
              />
              <h3>{{ card.identity_group }}</h3>
            </template>
            <el-card
              shadow="always"
              class="w-80% mt-2 rounded-5 mx-auto"
              @click="
                () => {
                  currentAdmin = admin.admin; //传值给对话框
                  callnumber = admin.phone;
                  callshortnumber = admin.short_number;
                  console.log(callnumber);
                  console.log(callnumberherf);
                  openDialog = true;
                }
              "
              v-for="admin in adminers"
              :key="admin.admin"
            >
              <div class="flex justify-between items-center w-80p h-1">
                <div class="flex justify-between items-center h-1">
                  <img
                    src="../img/人员.png"
                    alt=""
                    style="width: 15px; height: 15px; margin-right: 10px"
                  />
                  <div>
                    <span>{{ admin.admin }}</span>
                  </div>
                </div>
                <span>{{ admin.grade }}</span>
              </div>
            </el-card>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="openDialog"
    :show-close="false"
    width="90%"
    height="10px"
    style="border: none"
  >
    <template #header>
      <div class="w-full flex justify-center items-end h-35px">
        <div><h2>联系提醒</h2></div>
      </div>
    </template>
    <div class="mb-15px flex justify-center">
      <h3>即将联系 网管</h3>
      <h3>({{ currentAdmin }})</h3>
    </div>
    <div class="flex w-full">
      <el-button
        type="primary"
        plain
        class="flex-grow"
        @click="
          {
            console.log(callnumberherf);
          }
        "
        ><a :href="callnumberherf">长号</a></el-button
      >
      <el-button
        type="primary"
        plain
        class="flex-grow"
        @click="
          {
            console.log(callshortnumberherf);
          }
        "
        ><a :href="callshortnumberherf">短号</a></el-button
      >
      <el-button
        type="primary"
        plain
        class="flex-grow"
        @click="
          {
            console.log(smsnumberherf);
          }
        "
        ><a :href="smsnumberherf">短信</a></el-button
      >
      <el-button
        type="primary"
        plain
        @click="() => (openDialog = false)"
        class="flex-grow mr-0"
        >取消</el-button
      >
    </div>
  </el-dialog>
</template>
<style scoped>
a {
  text-decoration: none;
}
p {
  margin-bottom: 2px;
  font-size: 15px;
}
.contianer {
  background-image: url("../img/hgxywLogo_01.png");
  background-repeat: no-repeat;
  background-position: 50px 50px;
  background-attachment: fixed;
  background-size: 2 80%;
}
.el-collapse-item__content {
  background-color: black !important;
  font-size: large;
}
</style>
