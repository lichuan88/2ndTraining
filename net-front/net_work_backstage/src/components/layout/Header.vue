<script setup lang="ts">
// import { useStore } from "../../store";
// const store = useStore();
const user_name = localStorage.getItem("user_name");
</script>
<template>
  <div
    class="h-55px flex items-center bg-[#252830] w-full justify-between"
    style="padding: 20px; box-sizing: border-box"
  >
    <div class="flex items-center justify-between">
      <h2 style="color: aliceblue">网管电话簿后台</h2>
      <img src="../../img/manage.png" alt="" class="img1" />
    </div>
    <div style="margin-right: 20px; display: flex">
      <img src="../../img/human.png" alt="" class="img2" />
      <h3 style="color: aliceblue">{{ user_name }}</h3>
    </div>
  </div>
</template>

<style scoped>
.img1 {
  width: 23px;
  height: 23px;
  margin-left: 8px;
}
.img2 {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
