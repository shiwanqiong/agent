
/**
 * Created by qq on 2017/11/21 0021.
 */
import fetch from '../utils/fetch'
export function fetchUniverConfig(page,size){
  return fetch({
    url:'/configuration/list',
    method:'post',
    data:{
      page:page,
      size:size
    }
  })
}
