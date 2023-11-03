import { testAlova } from "../index";
import {
  AlovaResponse,
  dormitories,
  recadminlist,
  identity_cards,
  identity_List,
} from "../../types/response-data";
//get 获取网管列表
export const GetNetAdmin = () => {
  return testAlova.Get<AlovaResponse<dormitories[]>>(`/api/getnetadmin`, {
    shareRequest: false,
  });
};
// get推荐网管
export const GetRecAdmin = () => {
  return testAlova.Get<AlovaResponse<recadminlist>>(`/api/recadmin`, {
    shareRequest: false,
  });
};

//接口复用
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
