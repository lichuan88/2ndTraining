<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import { BookForm } from "@/class/book-model"
import { addBook } from '@/api/methods/book'
import { useRequest } from 'alova'
import ColorPickerV3 from "@/components/ColorPickerV3.vue"
interface DialogProps {
  open: boolean
  day: string
}
const props = defineProps<DialogProps>()
const open = ref<boolean>(false)
const day = ref<string>('')

watch(
  () => [props.open, props.day],
  ([newVal1, newVal2]) => {
    open.value = newVal1 as boolean;
    day.value = form.start = form.end = (newVal2 as string);
  }
)

const { send: submit } = useRequest((form: BookForm) => addBook(form), { immediate: false })

const Rules = reactive({
  title: [
    (v: string) => !!v || '部门名称不能为空',
    (v: string) => (v && v.length <= 10) || '请填写正确的部门名称',],
  start: [(v: string) => !!v || '时间不能为空',
  (v: string) => (v && v.length <= 20) || '时间格式错误',],
  end: [(v: string) => !!v || '时间不能为空',
  (v: string) => (v && v.length <= 20) || '时间格式错误',],
  color: [(v: string) => !!v || '颜色不能为空'],
})

const department_title=ref<string[]>([
  "网站运维部","网络运维部","信息化运维部","行政秘书部"
])

const snackbarSuccess = ref(false)
const snackbarError = ref(false)
const snackbarWarn = ref(false)

const form = reactive<BookForm>({
  title: '',
  start: '',
  end: '',
  color: '',
})
const formRef = ref()
const emit = defineEmits<{ close: [], complete: [] }>()
const submitForm = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) {
    submit(form).then(() => {
      emit('complete')
      snackbarSuccess.value = true
      formRef.value.reset()
      emit('close')
    })
  } else {
    snackbarError.value = true
  }
}
const closeDialog = () => {
  snackbarWarn.value = true
  emit('close')
}

const selectedColor = ref();
const ref_ColorPickerV3 = ref();

// 打开颜色选择器
const openColor = () => {
  ref_ColorPickerV3.value.isShowColorPicker(true);
};

// 确定颜色
const confirm = (color: any) => {
  form.color = selectedColor.value = color;
};
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent width="512">
      <v-card>
        <template v-slot:title>
          <div style="font-size: larger;">预约信息填写</div>
          <div>当前选择日期：{{ day }}</div>
        </template>
        <v-card-text>
          <v-form ref="formRef" :model="form">
            <v-col cols="12">
              <v-select v-model="form.title" label="部门名称*" :rules="Rules.title" :items="department_title"> </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.start" label="开始时间*" :rules="Rules.start" hint="需手动填写，如:'2023-10-20 12:20'"
                persistent-hint></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.end" label="结束时间*" :rules="Rules.end" hint="需手动填写，如:'2023-10-20 13:30'"
                persistent-hint></v-text-field>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="8">
                  <v-text-field v-model="form.color" label="选择或输入心仪的预约颜色*" hint="如:'#02b462'(HEX格式)、'yellow'等"
                    persistent-hint :rules="Rules.color"></v-text-field>
                </v-col>
                <v-col>
                  <v-btn @click="openColor" height="50px">颜色选择按钮</v-btn>
                </v-col>
              </v-row>
            </v-col>

            <ColorPickerV3 ref="ref_ColorPickerV3" color="orange" @confirm="confirm" pickerType="chrome">
            </ColorPickerV3>

            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="blue-darken-1" class="me-4" @click="submitForm">
                确认
              </v-btn>
              <v-btn color="blue-darken-1" @click="closeDialog">
                取消
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>

  <v-snackbar :timeout="1500" color="#f0f9eb" class="topSnackbar" v-model="snackbarSuccess">
    <div class="fontS"><v-icon start icon="mdi-checkbox-marked-circle"></v-icon>预约成功</div>
  </v-snackbar>
  <v-snackbar :timeout="1500" color="#fef0f0" class="topSnackbar" v-model="snackbarError">
    <div class="fontE"><v-icon start icon="mdi-close-circle-outline"></v-icon>预约失败</div>
  </v-snackbar>
</template>
<style scoped>
.topSnackbar {
  bottom: 90% !important;
  z-index: 2000;
}

.fontS {
  color: #67c23a;
  text-align: center !important;
  font-size: 1rem;
}

.fontE {
  color: #f56c6c;
  text-align: center !important;
  font-size: 1rem;
}

.fontW {
  color: #e6a23c;
  text-align: center !important;
  font-size: 1rem;
}
</style>