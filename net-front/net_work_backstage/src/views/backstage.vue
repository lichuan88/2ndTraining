<script setup lang="ts"></script>
<template>
  <div class="w-full flex flex-wrap">
    <el-card
      shadow="always"
      class="cursor-pointer w-30% rounded-5 m-3"
      @click="
        () => {
          $router.push({ name: 'admindetail' });
          // params: { id: role.roleId }
        }
      "
      ><div class="flex items-center w-80p h-1">
        <span>移动人员</span>
      </div></el-card
    ><el-card shadow="always" class="cursor-pointer w-30% rounded-5 m-3"
      ><div class="flex items-center w-80p h-1">
        <span>移动人员</span>
      </div></el-card
    >
    <el-card shadow="always" class="cursor-pointer w-30% rounded-5 m-3"
      ><div class="flex items-center w-80p h-1">
        <span>移动人员</span>
      </div></el-card
    >
    <el-card shadow="always" class="cursor-pointer w-30% rounded-5 m-3"
      ><div class="flex items-center w-80p h-1">
        <span>移动人员</span>
      </div></el-card
    >
  </div>
</template>
<style scoped></style>
