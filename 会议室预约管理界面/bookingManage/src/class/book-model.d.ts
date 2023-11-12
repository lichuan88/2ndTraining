
//定义 预约事件 的类型
export interface BookForm{
    title:string,
    start:string,
    end:string,
    color:string
}

export interface AlovaResponse<T> {
    code: number
    data: T
    message: string
  }

export interface User{
    userName?:string
    account:string
    password:string
}