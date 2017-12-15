import fetch from '../utils/fetch'
export function fetchBuildings(schoolId){
  return fetch({
    url:'/statistics/dormitory/count/school/info',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}

export function fetchList(schoolId,deadline){
    return fetch({
      url:'/statistics/dormitory/realtime/school',
      method:'post',
      data:{
        school_id:schoolId,
        deadline:deadline
      }
    })
  }

  export function fetchBack(schoolId,start_date,end_date){
    return fetch({
      url:'/statistics/dormitory/collected/school',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date
      }
    })
  }

  export function fetchMonth(schoolId,start_date,end_date,number){
    return fetch({
      url:'/statistics/dormitory/student/abnormal',
      method:'post',
      data:{
        school_id:schoolId,
        start_date:start_date,
        end_date:end_date,
        number:number
      }
    })
  }