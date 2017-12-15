import fetch from  '../utils/fetch'
export function fetchPie(schoolId,start_date,end_date){
    return fetch({
      url:'/statistics/school/details',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date
      }
    })
  }

  export function fetchLine(schoolId,start_date,end_date){
    return fetch({
      url:'/statistics/school/rate',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date
      }
    })
  }

  export function fetchBrokenLine(schoolId,start_date,end_date){
    return fetch({
      url:'/statistics/school/rate/details',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date
      }
    })
  }