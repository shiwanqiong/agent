/**
 * Created by qq on 2017/11/16 0016.
 */
import Vue from 'vue'
import moment from 'moment'
Vue.filter('time',function(value,formatString){
  formatString=formatString||'MM-DD';
  return moment(value).format(formatString);
})
//全局过滤器
/**
 * Created by qq on 2017/11/22 0022.
 */
