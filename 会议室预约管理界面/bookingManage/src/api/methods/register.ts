import { User ,AlovaResponse} from "@/class/book-model"
import { testAlova } from '@/api/index'

export const registerUser =(user:User)=>{
    return testAlova.Post<AlovaResponse<null>>('/userRegister',user)
}