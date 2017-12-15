/**
 * Created by qq on 2017/11/7 0007.
 */
import fetch from '../utils/fetch'
export function fetchStudents(obj){
  return fetch({
    url:'/student/list',
    method:'post',
    data:{
      school_id:obj.schoolId,
      department_id:obj.departId,
      specialty_id:obj.majorId,
      class_id:obj.classId,
      name:obj.name,
      number:obj.studentNo,
      page:obj.page,
      size:obj.size,
    }
  })
}
