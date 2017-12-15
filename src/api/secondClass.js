import fetch from  '../utils/fetch'
export function fetchSum(schoolId){//获取上部分数据，不包含折线图
    return fetch({
      url:'/activityService/school/activity/sum',
      method:'post',
      data:{
        school_id:schoolId
      }
    })
  }

  export function fetchCount(schoolId){
    return fetch({
      url:'/activityService/school/activity/count',
      method:'post',
      data:{
        school_id:schoolId
      }
    })
  }

  export function fetchBrokenLine(schoolId,start_date,end_date){
    return fetch({
      url:'/activityService/school/activity/time',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date
      }
    })
  }