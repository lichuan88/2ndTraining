<script setup lang="ts">
import { ref, watch } from "vue";
const dialogVisible = ref(false);
import { reactive } from "vue";
const form = reactive({
  name: "",
  phone: "",
  shortphone: "",
  grade: "",
});
const onSubmit = () => {
  console.log("submit!");
};
interface DialogProps {
  open: boolean;
  title: string;
}

const props = defineProps<DialogProps>();
//控制对话框开关
const open = ref<boolean>(false);
watch(
  () => props.open,
  (isOpen: boolean) => {
    open.value = isOpen;
  }
);
</script>
<template>
  <el-dialog width="40%" v-model="open" :title="props.title">
    <el-form
      :inline="true"
      :model="form"
      class="demo-form-inline flex flex-col justify-center w-50p"
      label-width="100px"
    >
      <el-form-item label="网管姓名">
        <el-input v-model="form.name" clearable />
      </el-form-item>
      <el-form-item label="网管电话">
        <el-input v-model="form.phone" clearable />
      </el-form-item>
      <el-form-item label="电话(短号)">
        <el-input v-model="form.shortphone" clearable />
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="form.grade" clearable />
      </el-form-item>
      <el-form-item style="margin: auto">
        <el-button type="primary" @click="onSubmit">确认提交</el-button>
        <el-button @click="open = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style scoped lang="scss"></style>
