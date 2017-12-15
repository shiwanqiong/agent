/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchDormBuildings(schoolId){
  return fetch({
    url:'/dormitory/building/list/school',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}
export function fetchDormNo(buildingId){
  return fetch({
    url:'/dormitory/list/building',
    method:'post',
    data:{
      building_id:buildingId
    }
  })
}

export function fetchStudentsByclass(obj){
  return fetch({
    url:'/dormitory/statistics/student&info=school',
    method:'post',
    data:{
      school_id:obj.schoolId,
      department_id:obj.departId,
      specialty_id:obj.majorId,
      class_id:obj.classId,
      page:obj.page,
      size:obj.size,
    }
  })
}

export function fetchStudentByDorm(obj){
  return fetch({
    url:'/dormitory/statistics/student&info=dormitory',
    method:'post',
    data:{
      school_id:obj.schoolId,
      building_id:obj.buildingId,
      dormitory_id:obj.dormId,
      page:obj.page,
      size:obj.size
    }
  })
}
export function fetchAllBuildings(obj){
  return fetch({
    url:'/dormitory/building/list',
    method:'post',
    data:{
      school_id:obj.schoolId,
      building_id:obj.buildingId,
      page:obj.page,
      size:obj.size
    }
  })
}

export function fetchHouseparent(obj){
  return fetch({
    url:'/dormitory/houseparent/list',
    method:'post',
    data:{
      school_id:obj.schoolId,
      name:obj.houseparentId,
      page:obj.page,
      size:obj.size
    }
  })
}

export function fetchBuildingPlace(categoryId){
  return fetch({
    url:'/place/list',
    method:'post',
    data:{
      category_id:categoryId
    }
  })
}

export function fetchPlaceCategory(schoolId){
  return fetch({
    url:'/place/category/list',
    method:'post',
    data:{
      school_id:schoolId
    }
  })
}
