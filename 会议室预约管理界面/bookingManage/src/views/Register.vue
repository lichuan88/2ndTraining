<script setup lang="ts">
import { ref, reactive,watch } from 'vue'
import { useRequest } from 'alova'
import { User } from "@/class/book-model"
import { registerUser } from '@/api/methods/register'
import { useRouter } from 'vue-router'

const router = useRouter()
const snackbarError = ref(false)
const snackbarSuccess = ref(false)

const { send: submit } = useRequest((user: User) => registerUser(user), { immediate: false })
const user = reactive<User>({
    userName: '',
    account: '',
    password: '',
})
const formRef = ref()
const Rules = reactive({
    name: [
        (v: string) => !!v || '用户名不能为空',
        (v: string) => (v && v.length <= 12) || '请填写正确的用户名',],
    account: [
        (v: string) => !!v || '账号不能为空',
        (v: string) => (v && v.length <= 12) || '请填写正确的账号',],
    password: [(v: string) => !!v || '密码不能为空',
    (v: string) => (v && v.length <= 10) || '请填写正确的账号',],
})

const submitForm = async () => {
    const { valid } = await formRef.value.validate()
    if (valid) {
        submit(user).then(() => {
            snackbarSuccess.value = true
            setTimeout(() => {
                router.push({ name: 'login', path: '/login' })
            }, 1500);
        })
    } else {
        snackbarError.value = true
    }
}

const switchPwd = ref<boolean>(true)
const switchPwdState=()=>{
    switchPwd.value=!switchPwd.value
}
watch(
()=>switchPwd.value,
(newState:boolean)=>{
switchPwd.value=newState
}
)
</script>
<template>
    <div class="body">
        <div class="main">
            <div class="switch">
                <div class="d-flex justify-center align-center flex-column ">
                    <h2 class="title">用户登录</h2>
                    <router-link :to="{ name: 'login' }">
                        <v-btn color="blue-lighten-1" width="100">
                            登录
                        </v-btn>
                    </router-link>
                </div>
            </div>
            <div class="container">
                <v-form ref="formRef" :model="user">
                    <h2 class="title">注册页面</h2>
                    <v-text-field v-model="user.userName" label="用户名" variant="outlined" required :rules="Rules.name"
                        style="width: 500px;"></v-text-field>
                    <br>
                    <v-text-field v-model="user.account" label="账号" variant="outlined" required
                        :rules="Rules.account"></v-text-field>
                    <br>
                    <div v-if="switchPwd" style="position: relative;">
                        <v-text-field v-model="user.password" type="password" label="密码" variant="outlined"
                            :rules="Rules.password" required>
                        </v-text-field>
                        <v-icon class="mdi mdi-eye-off-outline" style="position: absolute;top: 15px;right: 0;"
                            @click="switchPwdState"></v-icon>
                    </div>
                    <div v-else style="position: relative;">
                        <v-text-field v-model="user.password" type="text" label="密码" variant="outlined"
                            :rules="Rules.password" required>
                        </v-text-field>
                        <v-icon class="mdi mdi-eye-outline" style="position: absolute;top: 15px;right: 0;"
                            @click="switchPwdState"></v-icon>
                    </div>
                    <v-btn color="blue-lighten-1 rounded" width="120" style="margin: 0 38%;" @click="submitForm">注册</v-btn>
                </v-form>
            </div>
        </div>
    </div>

    <v-snackbar :timeout="1500" color="#f0f9eb" class="topSnackbar" v-model="snackbarSuccess">
        <div class="fontS"><v-icon start icon="mdi-checkbox-marked-circle"></v-icon>注册成功，即将跳转</div>
    </v-snackbar>
    <v-snackbar :timeout="1500" color="#fef0f0" class="topSnackbar" v-model="snackbarError">
        <div class="fontE"><v-icon start icon="mdi-close-circle-outline"></v-icon>登录失败</div>
    </v-snackbar>
</template>
<style scoped>
.body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    color: #8a8e90;
}

.main {
    display: flex;
    justify-content: end;
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 20px;
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
}

.title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #565555;
    text-align: center;
}

.switch {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding-top: 200px;
    background-color: #ecf0f3;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}

.fontE {
    color: #f56c6c;
    text-align: center !important;
    font-size: 1rem;
}

.fontS {
    color: #67c23a;
    text-align: center !important;
    font-size: 1rem;
}

.topSnackbar {
    bottom: 90% !important;
    z-index: 2000;
}</style>