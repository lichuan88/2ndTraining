//网络请求头文件
import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import vueHook from "alova/vue";

export const testURL = "http://127.0.0.1:8880";
export const testAlova = createAlova({
  baseURL: testURL,
  // 响应数据钩子，vue项目就用 alova 提供的 vueHook （必须）
  statesHook: vueHook,
  // 请求适配器，alova 官方推荐使用原生 fetch API 作为请求适配器 （必须）
  requestAdapter: GlobalFetch(),
  // 请求前钩子，可以在这里配置一些通用请求头例如 token，content type等等，相当于 axios 的请求拦截器
  beforeRequest(method) {
    method.config.headers = {
      "content-type": "application/json",
    };
  },
  // 响应钩子，相当于 axios 的响应拦截器，因为用的是 fetch api 作为请求适配器，因此我们这里把响应数据转化为json格式返回出去
  responded: (response) => response.json(),
});
