// 网络请求 返回数据 接口
//默认接口
export interface AlovaResponse<T> {
  code: number;
  data: T;
  message: string;
}
//获取身份组id和名称 （卡片
export interface identity_cards {
  identity_group_id: string;
  identity_group: string;
}

export interface identity_List {
  identity_group: string;
  identity_group_id: string;
  admins: adminer[];
}
export interface adminer {
  admin: string;
  grade?: string;
  identity_group_id: string;
  phone: string;
  short_number?: string;
  identity_group: string;
}
export interface loginget {
  token: string;
  user_name: string;
}
