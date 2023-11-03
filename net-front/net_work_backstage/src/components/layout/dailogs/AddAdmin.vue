<script setup lang="ts">
import { ref, watch } from "vue";
import { REaddadmin } from "../../../types/request-data";
import { useRequest } from "alova";
import { Addnetadmin } from "../../../api/methods/backstage";
import { ElMessage } from "element-plus";
/* const dialogVisible = ref(false); */
/* import { reactive } from "vue"; */
/* const form = reactive({
  name: "",
  phone: "",
  shortphone: "",
  grade: "",
}); */
interface DialogProps {
  open: boolean;
  title: string;
  identityGroupIdValue: string;
}
const props = defineProps<DialogProps>();
const id = props.identityGroupIdValue;
//控制对话框开关
let open = ref(false);
watch(
  () => props.open,
  (isOpen: boolean) => {
    open.value = isOpen;
  }
);
/* export interface REaddadmin {
  adminValue: string;
  gradeValue: string;
  identityGroupIdValue: string;
  phoneValue: string;
  shortNumberValue: string;
} */
const addadminArray = ref<REaddadmin>({
  adminValue: "",
  gradeValue: "",
  identityGroupIdValue: id,
  phoneValue: "",
  shortNumberValue: "",
});
const { onSuccess: addadminSuccess, send: updataddadmin } = useRequest(
  (ad: REaddadmin) => Addnetadmin(ad),
  {
    force: (shouldForce) => shouldForce,
    immediate: false,
  }
);
addadminSuccess((response) => {
  const message = response.data.message;
  const data = response.data.data;
  console.log(message);
  if (message == "Eorror") {
    console.log(data);
    if (data !== null) {
      ElMessage.error(data);
    }
  } else if (message == "Success") {
    console.log(data);
    if (data !== null) {
      ElMessage({
        message: data,
        type: "success",
      });
    }
    open.value = false;
    clear();
  }
});
const onSubmit = () => {
  console.log(id);
  if (
    addadminArray.value.phoneValue == "" ||
    addadminArray.value.adminValue == ""
  ) {
    ElMessage.error("网管姓名和电话不能为空");
  } else {
    updataddadmin(addadminArray.value);
  }
};
function clear() {
  addadminArray.value.adminValue = "";
  addadminArray.value.gradeValue = "";
  addadminArray.value.phoneValue = "";
  addadminArray.value.shortNumberValue = "";
}
</script>
<template>
  <el-dialog
    @open="
      {
        console.log(id);
      }
    "
    width="40%"
    v-model="open"
    :title="props.title"
    @close="
      {
        console.log(id);
        clear();
      }
    "
  >
    <el-form
      :inline="true"
      :model="addadminArray"
      class="demo-form-inline flex flex-col justify-center w-50p"
      label-width="100px"
      status-icon
    >
      <el-form-item label="网管姓名">
        <el-input
          v-model="addadminArray.adminValue"
          clearable
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="网管电话">
        <el-input
          v-model="addadminArray.phoneValue"
          clearable
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="电话(短号)">
        <el-input v-model="addadminArray.shortNumberValue" clearable />
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="addadminArray.gradeValue" clearable />
      </el-form-item>
      <el-form-item style="margin: auto">
        <el-button type="primary" @click="onSubmit()">确认提交</el-button>
        <el-button
          @click="
            {
              open = false;
              clear();
            }
          "
          >取消</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style scoped lang="scss"></style>
