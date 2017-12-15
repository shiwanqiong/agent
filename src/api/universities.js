/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from  '../utils/fetch'
export function fetchUnivers(){
  return fetch({
    //192.168.0.159:19100/school/list
    url:'/school/list',
    method:'post'
  })
}
export function fetchDepart(schoolId){
  return fetch({
    url:'/department/list',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}

export function fetchMajor(departmentId){
  return fetch({
    url:'/specialty/list',
    method:'post',
    data:{
      department_id:departmentId
    }
  })
}

export function fetchClassOption(specialtyId){
  return fetch({
    url:'/class/listBySpecialty',
    method:'post',
    data:{
      specialty_id:specialtyId,
    }
  })
}

export function fetchClass(specialtyId,page,size){
  return fetch({
    url:'class/list/by/specialty',
    method:'post',
    data:{
      specialty_id:specialtyId,
      page:page,
      size:size
    }
  })
}

export function fetchBuildings(schoolId){
  return fetch({
    url:'/teachBuilding/list',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}
export function fetchClassroom(buildingId){
  return fetch({
    url:'/classroom/list',
    method:'post',
    data:{
      teaching_building_id:buildingId
    }
  })
}
export function fetchCount(schoolId){
  return fetch({
    url:'/school/count/info',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}