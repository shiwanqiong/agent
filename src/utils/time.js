/**
 * Created by qq on 2017/11/16 0016.
 */
import moment from 'moment'
export function time(value,formatString){
  formatString=formatString||'MM-DD';
  return moment(value).format(formatString);
}
//全局过滤器
/**
 * Created by qq on 2017/11/22 0022.
 */
