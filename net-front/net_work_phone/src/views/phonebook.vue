<script setup lang="ts">
import { ref } from "vue";
const activeName = ref("1");
const openDialog = ref<boolean>(false);
</script>
<template>
  <div class="w-full justify-center flex mt-20">
    <div class="w-80%">
      <div class="w-full flex justify-center items-center flex-col mb-2">
        <p style="font-size: 20px; color: #3396db">网管通讯录</p>
        <p>温馨提示： 点击人员自动拨号</p>
        <p class="text-red">请优先寻找21，22级网管</p>
      </div>
      <div class="w-full">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            title="移动工作人员"
            name="1"
            class="justify-center"
          >
            <el-card
              shadow="always"
              class="w-80% mt-2 rounded-5"
              @click="() => (openDialog = true)"
            >
              <div class="flex justify-between items-center w-80p h-1">
                <span>移动人员1</span><span>2022</span>
              </div></el-card
            >
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
        <!-- <el-button type="danger" plain class="ml-auto">删除网管</el-button> -->
      </div>
    </template>
    <div class="mb-15px flex justify-center">
      <h3>即将联系 网管</h3>
      <h3>(黄文杰)</h3>
    </div>
    <div class="flex w-full">
      <el-button type="primary" plain class="flex-grow">长号</el-button>
      <el-button type="primary" plain class="flex-grow">短号</el-button>
      <el-button type="primary" plain class="flex-grow">短信</el-button>
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
/* .no-border .el-dialog_wrapper {
  border: none !important;
} */
</style>
