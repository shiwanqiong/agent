/**
 * Created by qq on 2017/12/15 0015.
 */
import {univerList} from '../data/subagentManage/subagentManageData'
import fetch from '../utils/fetch'
export function fetchUniverAss(page,size){
  return fetch({
    url:"/agent/univerAssesslist",
    method:"post",
    data:{
      page:page,
      size:size
    }
  })
}
