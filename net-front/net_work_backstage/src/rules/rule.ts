import { reactive } from "vue";
const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the admin"));
  }
};
const validatephone = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the phone"));
  }
};
export const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validateName, trigger: "blur" }],
  checkPass: [{ validator: validatephone, trigger: "blur" }],
});
