<script setup lang="ts">
// import backstage from "../src/views/backstage.vue";
// import admindetail from "../src/views/admindetail.vue";
</script>
<template>
  <div class="common-layout">
    <el-container style="display: flex; flex-direction: column">
      <Header />
      <el-container>
        <el-aside width="200px" height="100%"><Sider /></el-aside>
        <el-main><Main /></el-main>
        <!-- <el-main><admindetail /></el-main> -->
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
