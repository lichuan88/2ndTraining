<script setup lang="ts">
import { useRoute } from "vue-router";
import { useRequest } from "alova";
const route = useRoute();
import { ref } from "vue";
import { identity_List, adminer } from "../types/response-data";
import { GetIndentityList, delnetadmin } from "../api/methods/backstage";
import { ElMessage } from "element-plus";

const IdentityList = ref<identity_List>({
  identity_group_id: "",
  identity_group: "",
  admins: [],
});
const id = route.params.id; //身份组id
const deladmin = ref(""); // 删除网管
const deldialogVisible = ref(false); //删除网管对话框
const adminers = ref<adminer[]>([]);
const count = ref(); //网管人数

//获取身份组中
const { onSuccess, send: updateIdentityList } = useRequest(
  (id: string) => GetIndentityList(id),
  {
    force: (shouldForce) => shouldForce,
    immediate: false,
    cache: false,
  }
);
onSuccess((response) => {
  IdentityList.value = response.data.data;
  adminers.value = IdentityList.value.admins;
  count.value = IdentityList.value.admins.length;
  console.log(IdentityList.value);
});
updateIdentityList(id);
//删除网管
const { onSuccess: deladminSuccess, send: updatedeladmin } = useRequest(
  (admin: string) => delnetadmin(admin),
  {
    force: (shouldForce) => shouldForce,
    immediate: false,
  }
);
deladminSuccess((response) => {
  const message = response.data.message;
  console.log(message);
  ElMessage({
    message: "删除成功",
    type: "success",
  });
});

// const tableData = ref(1);
// 控制对话框开关
const openDialog = ref<boolean>(false);
const deleteRow = async (admin: string) => {
  console.log(admin);
  try {
    await updatedeladmin(admin);
    console.log(id);
    await updateIdentityList(id);
    console.log(111111);
  } catch (error) {
    // 处理错误
    console.error(error);
  }
};
</script>
<template>
  <section>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/back' }">网管列表</el-breadcrumb-item>
      <el-breadcrumb-item>网管管理</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
  <section class="mt-4">
    <el-card>
      <el-descriptions size="large" :column="5" border>
        <template #title>
          <h3>网管基本信息</h3>
        </template>
        <template #extra>
          <el-button
            type="primary"
            @click="
              () => {
                openDialog = true;
              }
            "
            >添加网管</el-button
          >
        </template>
        <el-descriptions-item label="身份组名称">{{
          IdentityList.identity_group
        }}</el-descriptions-item>
        <el-descriptions-item label="网管人数">{{
          count
        }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-table
      :data="adminers"
      stripe
      border
      height="400"
      style="width: 100%"
      align="center"
    >
      <el-table-column prop="identity_group" label="所属身份组" width="200" />
      <el-table-column prop="admin" label="网管姓名" width="200" />
      <el-table-column prop="phone" label="网管电话" width="200" />
      <el-table-column prop="short_number" label="电话短号" width="200" />
      <el-table-column prop="grade" label="所属年级" width="200" />
      <el-table-column fixed="right" label="管理">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="
              {
                deladmin = scope.row.admin;
                deldialogVisible = true;
              }
            "
          >
            删除网管
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>

  <AddAdmin
    :open="openDialog"
    title="增加网管"
    @close="
      {
        openDialog = false;
        console.log(id);
        updateIdentityList(id);
        console.log(1111111111);
      }
    "
    :identityGroupIdValue="id"
  />

  <el-dialog v-model="deldialogVisible" title="删除网管" width="30%">
    <span>确定要删除该网管</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deldialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="
            {
              deldialogVisible = false;
              deleteRow(deladmin);
            }
          "
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped></style>
