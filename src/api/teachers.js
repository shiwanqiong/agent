/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchTeacher(page,size){
  return fetch({
    url:'/teacher/list',
    method:'post',
    data:{
      page:page,
      size:size
    }
  })
}
export function searchTeacher(params){
  return fetch({
    url:'/teacher/select',
    method:'post',
    data:{
      page:params.page,
      size:params.size,
      school_id:params.schoolId,
      name:params.name
    }
  })
}
