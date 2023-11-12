import { BookForm,AlovaResponse} from "@/class/book-model"
import { testAlova } from '@/api/index'

export const getBookMsg=()=>{
    return testAlova.Get<AlovaResponse<BookForm[]>>('/getBookMsg',{
        shareRequest:false
    })
}