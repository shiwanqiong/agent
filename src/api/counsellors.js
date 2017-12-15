/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchCounsellor(page,size){
  return fetch({
    url:'/classLeader/list',
    method:'post',
    data:{
      page:page,
      size:size
    }
  })
}
export function searchCounsellor(params){
  return fetch({
    url:'/classLeader/select',
    method:'post',
    data:{
      page:params.page,
      size:params.size,
      school_id:params.schoolId,
      name:params.name
    }
  })
}
