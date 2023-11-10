import { testAlova } from "../index";
import { REaddadmin } from "../../types/request-data";
import {
  AlovaResponse,
  identity_cards,
  identity_List,
  loginget,
} from "../../types/response-data";
// import { useStore } from "../../store";
// const store = useStore();
//get 获取身份组列表 （卡片
export const GetIndentityCards = () => {
  return testAlova.Get<AlovaResponse<identity_cards[]>>(`/api/getIdentity`, {
    shareRequest: false,
  });
};

//get 获取身份组具体信息 （列表页面
export const GetIndentityList = (id: string) => {
  return testAlova.Get<AlovaResponse<identity_List>>(`/api/getDornetadmin`, {
    params: {
      identity_group_id: id,
    },
    shareRequest: false,
  });
};

// post 增加网管
export const Addnetadmin = (ad: REaddadmin) => {
  // const token = localStorage.getItem("token");
  // const specificHeaders = {
  //   "content-type": "application/json",
  //   Authorization: token,
  // };
  return testAlova.Post<AlovaResponse<null>>(`/admin/addadmin`, ad, {
    // headers: specificHeaders,
    shareRequest: false,
  });
};
// 删除网管
export const delnetadmin = (admin: string) => {
  // const token = localStorage.getItem("token");
  // const specificHeaders = {
  //   "content-type": "application/json",
  //   Authorization: token,
  // };
  return testAlova.Delete<AlovaResponse<null>>(
    `/admin/deladmin?admin=${admin}`,
    {
      // headers: specificHeaders,
      shareRequest: false,
    }
  );
};
//登录
export const loginSystem = (user: string, password: string) => {
  return testAlova.Post<AlovaResponse<loginget>>(
    `/api/login`,
    { admin_id: user, admin_password: password },
    {
      shareRequest: false,
    }
  );
};
