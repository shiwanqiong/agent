/**
 * Created by qq on 2017/11/15 0015.
 */
import fetch from '../utils/fetch'
export function fetchSummary(){
  return fetch({
    url:'/student/count/user',
    method:'post',
  })
}
