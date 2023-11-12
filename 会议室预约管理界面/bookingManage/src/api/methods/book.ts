import { BookForm ,AlovaResponse} from "@/class/book-model"
import { testAlova } from '@/api/index'

export const addBook =(form:BookForm)=>{
    return testAlova.Post<AlovaResponse<null>>('/addBookMsg',form)
}