/**
 * Created by qq on 2017/11/10 0010.
 */
import fetch from  '../utils/fetch'
export function login(params){
  return fetch({
    url:'/user/login',
    method:'post',
    data:params
  })
}
export function logout(){

}
