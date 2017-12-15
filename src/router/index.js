import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['../views/login.vue'], resolve);
const AppMain = resolve => require(['../views/appMain.vue'], resolve);
const Index = resolve => require(['../views/index.vue'], resolve);
const SubagentsManage=resolve=>require(['../views/subagentsManage/subagents/subagentEntry.vue'],resolve)
const Subagents=resolve=>require(['../views/subagentsManage/subagents/subagentsList.vue'],resolve)
const SubagentAssessingEntry=resolve=>require(['../views/subagentsManage/subagentAssessing/subagentAssessingEntry.vue'],resolve)
const SubagentAssessingList=resolve=>require(['../views/subagentsManage/subagentAssessing/subagentAssessingList.vue'],resolve)
const UniversityAssessingEntry=resolve=>require(['../views/subagentsManage/universityAssessing/universityAssessingEntry.vue'],resolve)
const UniverWillAssessingList=resolve=>require(['../views/subagentsManage/universityAssessing/univerWillAssessingList.vue'],resolve)
const UniversityInfoEntry=resolve=>require(['../views/universitiesManage/universityInfo/universityInfoEntry.vue'],resolve)
const UniversityInfoList=resolve=>require(['../views/universitiesManage/universityInfo/universityInfoList.vue'],resolve)
const UniversityRecordEntry=resolve=>require(['../views/universitiesManage/universityRecord/universityRecordEntry.vue'],resolve)
const UniversityRecordList=resolve=>require(['../views/universitiesManage/universityRecord/universityRecordList.vue'],resolve)
const DataManageEntry=resolve=>require(['../views/dataManage/dataManageEntry.vue'],resolve)
const DataList=resolve=>require(['../views/dataManage/dataList.vue'],resolve)
const Students=resolve=>require(['../views/dataManage/studentManage/students.vue'],resolve)
const Teachers=resolve=>require(['../views/dataManage/teacherManage/teachers.vue'],resolve)
const Counsellors=resolve=>require(['../views/dataManage/counsellorManage/counsellors.vue'],resolve)
const Classes=resolve=>require(['../views/dataManage/classesManage/classes.vue'],resolve)
const Courses=resolve=>require(['../views/dataManage/coursesManage/courses.vue'],resolve)
const Addresses=resolve=>require(['../views/dataManage/addressManage/addresses.vue'],resolve)
const SubAddresses=resolve=>require(['../views/dataManage/addressManage/subAddresses.vue'],resolve)
const Dormitorys=resolve=>require(['../views/dataManage/dormitoryManage/dormitorys.vue'],resolve)
const DormBuildings=resolve=>require(['../views/dataManage/dormitoryManage/dormBuildings.vue'],resolve)
const DormSupervisors=resolve=>require(['../views/dataManage/dormitoryManage/dormSupervisors.vue'],resolve)
const Configuration=resolve=>require(['../views/reportStatistics/configuration.vue'],resolve)
const Accounts=resolve=>require(['../views/reportStatistics/accounts.vue'],resolve)

Vue.use(Router)
const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/index',
      component: AppMain,
      children:[
        {
          path: '',
          name: 'index',
          component: Index,
          meta: {
            requireAuth: true,
          },
        },
        {
          path:'/subagents',
          component:SubagentsManage,
          children:[
            {
              path:'',
              name:'subagents',
              component:Subagents,
              meta:{
                requireAuth:true
              }
            },
          ]
        },
        {
          path:'/subagentAssessing',
          component:SubagentAssessingEntry,
          children:[
            {
              path:'',
              name:'subagentAssessingList',
              component:SubagentAssessingList,
              meta:{
                requireAuth:true
              }
            }
          ]
        },
        {
          path:'/universityAssessing',
          component:UniversityAssessingEntry,
          children:[
            {
              path:'',
              name:'univerWillAssessingList',
              component:UniverWillAssessingList,
              meta:{
                requireAuth:true
              }
            }
          ]
        },
        {
          path:'/universityRecord',
          component:UniversityRecordEntry,
          children:[
            {
              path:'',
              name:'universityRecordList',
              component:UniversityRecordList,
              meta:{
                requireAuth:true
              }
            }
          ]
        },
        {
          path:'/universityInfo',
          component:UniversityInfoEntry,
          children:[
            {
              path:'',
              name:'universityInfoList',
              component:UniversityInfoList,
              meta:{
                requireAuth:true
              }
            }
          ]
        },
        // {
        //   path:'/dataList',
        //   component:DataManageEntry,
        //   children:[
        //     {
        //       path:'',
        //       name:'dataList',
        //       component:DataList,
        //       meta:{
        //         requireAuth:true
        //       }
        //     },
        //     {
        //       path:'students',
        //       name:'students',
        //       component:Students,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'teachers',
        //       name:'teachers',
        //       component:Teachers,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'counsellors',
        //       name:'counsellors',
        //       component:Counsellors,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'classes',
        //       name:'classes',
        //       component:Classes,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'courses',
        //       name:'courses',
        //       component:Courses,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'addresses',
        //       name:'addresses',
        //       component:Addresses,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'subAddresses',
        //       name:'subAddresses',
        //       component:SubAddresses,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'dormitorys',
        //       name:'dormitorys',
        //       component:Dormitorys,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'dormBuildings',
        //       name:'dormBuildings',
        //       component:DormBuildings,
        //       meta:{requireAuth:true}
        //     },
        //     {
        //       path:'dormSupervisors',
        //       name:'dormSupervisors',
        //       component:DormSupervisors,
        //       meta:{requireAuth:true}
        //     }
        //   ]
        // },
        {
          path: '/configuration',
          name: 'configuration',
          component: Configuration,
          meta: {
            requireAuth: false,
          },
        },
      ]
    },
  ]
})
// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){
//     if(sessionStorage.token){
//       next();
//     }
//     else{
//       next({
//         path:'/',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }
//   else{
//     next();
//   }
// })
export default router
