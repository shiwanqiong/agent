/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchClass(page,size){
  return fetch({
    url:'/lessons/list',
    method:'post',
    data:{
      page:page,
      size:size,
    }
  })
}
export function searchClass(params){
  return fetch({
    url:'/lessons/select',
    method:'post',
    data:{
      page:params.page,
      size:params.size,
      school_id:params.schoolId,
      name:params.name
    }
  })
}
