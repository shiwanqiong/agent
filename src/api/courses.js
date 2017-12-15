/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchCourse(dateVal,classId){
  return fetch({
    url:'/schedule/record/list/class',
    method:'post',
    data:{
      date:dateVal,
      class_id:classId
    }
  })
}
export function fetchByClassRoom(date,classroomId){
  return fetch({
    url:'/schedule/record/list/classroom',
    method:'post',
    data:{
      date:date,
      classroom_id:classroomId
    }
  })
}

export function checkSchedule(obj){
  return fetch({
    url:'/timetable/select',
    method:'post',
    data:{
      school_id:obj.schoolId,
      semester_type:obj.semesterType,//Fall 秋季学期（上学期） Spring 冬季学期（下学期）
      school_year:obj.schoolYear//2017-2018
    }
  })
}
