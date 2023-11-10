<script setup lang="ts"></script>
<template>
  <div class="common-layout">
    <el-container style="display: flex; flex-direction: column">
      <Header />
      <el-container>
        <el-aside width="200px" height="100%"><Sider /></el-aside>
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss"></style>
