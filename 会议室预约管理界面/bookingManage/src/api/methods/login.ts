import { User ,AlovaResponse} from "@/class/book-model"
import { testAlova } from '@/api/index'

export const addUser =(user:User)=>{
    return testAlova.Post<AlovaResponse<null>>('/userLogin',user)
}