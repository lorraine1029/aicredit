import Api from "../commen/Api"
import {CARTSURL} from "../commen/AjaxUrlSchema"

export default  {

    getCarts(cb){
       Api.get(CARTSURL,cb)
    }
}
