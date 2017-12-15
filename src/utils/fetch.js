/**
 * Created by qq on 2017/11/7 0007.
 */
import axios from 'axios'
import router from '../router/index'
//创建axios实例
const instance=axios.create();

// request拦截器
instance.interceptors.request.use(config=>{
    if(sessionStorage.token){ // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization=`token ${sessionStorage.token}`;
    }
    return config;
  },
  err=>{
    return Promise.reject(err);
  }
)
//response拦截器
instance.interceptors.response.use(
  response=>response,
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          router.replace({
            path:'/login',
            query:{redirect:router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data);//返回接口返回的错误信息
  }
)
export default instance
