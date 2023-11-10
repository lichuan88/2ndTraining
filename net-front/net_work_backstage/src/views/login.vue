<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 150px;
    "
  >
    <div
      style="
        width: 400px;
        height: 280px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
      "
    >
      <h2 style="margin-bottom: 35px">Login</h2>
      <div style="width: 350px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="user_id">
            <el-input v-model="form.user_id" />
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="check()">confirm</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { loginSystem } from "../api/methods/backstage";
const form = reactive({
  user_id: "",
  password: "",
});
import { useRequest } from "alova";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
// import { useStore } from "../store";
// const store = useStore();
const router = useRouter();

const check = () => {
  if (form.user_id != "" && form.password != "") {
    updateloginSystem(form.user_id, form.password);
  } else {
    ElMessage({
      message: "用户名与密码不能为空",
      type: "warning",
    });
  }
  form.user_id = "";
  form.password = "";
};
const { onSuccess, send: updateloginSystem } = useRequest(
  (user: string, password: string) => loginSystem(user, password),
  {
    force: (shouldForce) => shouldForce,
    immediate: false,
  }
);
onSuccess((response) => {
  const message = response.data.message;
  const mytoken = response.data.data?.token;
  localStorage.setItem("token", mytoken);
  const myuser_name = response.data.data?.user_name;
  localStorage.setItem("user_name", myuser_name);
  // store.token = response.data.data?.token;
  // store.user_name = response.data.data?.user_name;
  // console.log(store.token);
  console.log(message);
  if (message == "获取token成功,登录成功") {
    ElMessage({
      message: "登录成功",
      type: "success",
    });
    router.push("/index");
  }
  if (message == "密码错误") {
    ElMessage.error(message);
  }
  if (message == undefined) {
    ElMessage.error("该用户不存在");
  }
});
</script>

<style scoped></style>
