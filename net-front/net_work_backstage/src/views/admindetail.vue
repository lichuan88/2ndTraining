<script setup lang="ts">
// import { useRoute } from "vue-router";
// const route = useRoute();
import { ref } from "vue";
// const tableData = ref(1);
// 控制对话框开关
const openDialog = ref<boolean>(false);
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const deleteRow = (id: string) => {
  console.log(id);
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
        <el-descriptions-item label="网管组名称"
          >c22男生宿舍</el-descriptions-item
        >
        <el-descriptions-item label="网管人数">7</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="dor" label="所属宿舍" width="200" />
      <el-table-column prop="name" label="网管姓名" width="200" />
      <el-table-column prop="phone" label="网管电话" width="200" />
      <el-table-column prop="shortp" label="电话短号" width="200" />
      <el-table-column prop="grade" label="所属年级" width="200" />
      <el-table-column fixed="right" label="管理">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            删除网管
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
  <AddAdmin :open="openDialog" title="增加网管" @close="openDialog = false" />
</template>
<style scoped></style>
