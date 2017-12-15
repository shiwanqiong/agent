/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchCategory(schoolId){
  return fetch({
    url:'/place/category/list',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}
export function fetchPlace(categoryId){
  return fetch({
    url:'/place/list',
    method:'post',
    data:{
      category_id:categoryId
    }
  })
}
