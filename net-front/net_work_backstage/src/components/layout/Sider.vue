<script setup lang="ts"></script>
<template>
  <div class="h-screen">
    <el-menu
      class="h-full"
      :router="true"
      default-active="/"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-menu-item index="/index/back">
        <h3>网管列表</h3>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped></style>
