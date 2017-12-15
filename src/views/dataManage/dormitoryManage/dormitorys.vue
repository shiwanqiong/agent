<style lang="scss" scoped>
</style>
<template>
  <el-tabs v-model="activeName" @tab-click="_handleTabClick">
    <el-tab-pane label="按班级查询" name="first">
      <div class="el-university">
        <div class="hm-searchBar">
          <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
            <el-row>
              <!--<el-col :xs="24" :sm="12" :md="6" :lg="6">-->
              <!--<el-form-item label="学院">-->
              <!--<el-select placeholder="学院" v-model="formInline.institute">-->
              <!--<el-option label="计算机学院" value="institute1"></el-option>-->
              <!--<el-option label="交通学院" value="institute2"></el-option>-->
              <!--</el-select>-->
              <!--</el-form-item>-->
              <!--</el-col>-->
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="学校">
                  <el-select placeholder="学校" v-model="formInline.university" @change="_univerChange">
                    <el-option v-for="item in universe" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="系">
                  <el-select placeholder="系" v-model="formInline.department" @change="_departChange">
                    <el-option v-for="item in depart" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="专业">
                  <el-select placeholder="专业" v-model="formInline.major" @change="_majorChange">
                    <el-option label="全部" value="all"></el-option>
                    <el-option v-for="item in major" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="班级">
                  <el-select placeholder="班级" v-model="formInline.class">
                    <el-option label="全部" value="all"></el-option>
                    <el-option v-for="item in classes" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="4" :lg="4">
                <el-form-item>
                  <el-button type="primary" @click="_loadStudentsByclass(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="hm-btn-panel">
          <!--<router-link :to="{name:'univerAdd'}">-->
            <!--<el-button type="primary">新增学生</el-button>-->
          <!--</router-link>-->
          <hmUpload buttonText="新增学生" :universe="universe" url="/dormitory/student/import"></hmUpload>
          <router-link :to="{name:'dormBuildings'}">
            <el-button type="primary">宿舍楼</el-button>
          </router-link>
          <router-link :to="{name:'dormSupervisors'}">
            <el-button type="primary">宿舍管理员</el-button>
          </router-link>
        </div>
        <div class="el-main-table">
          <hm-table :column="column" :tableData="tableData" :operation="operation" :pageObj="pageObj" @handleCurrentChange="_change" @handleClick="_handleClick" :loading="loading"></hm-table>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="按宿舍查询" name="second">
      <div class="el-university">
        <div class="hm-searchBar">
          <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
            <el-row>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="学校">
                  <el-select placeholder="学校" v-model="formInline.university1" @change="_univerChange1">
                    <el-option v-for="item in universe" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="宿舍楼">
                  <el-select placeholder="宿舍楼" v-model="formInline.building" @change="_buildingChnage">
                    <el-option label="全部" value="all"></el-option>
                    <el-option v-for="item in buildings" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="宿舍号">
                  <el-select placeholder="宿舍号" v-model="formInline.dormNo">
                    <el-option label="全部" value="all"></el-option>
                    <el-option v-for="item in dormNo" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="4" :lg="4">
                <el-form-item>
                  <el-button type="primary" @click="_loadStudentsByDorm(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="hm-btn-panel">
          <!--<router-link :to="{name:'univerAdd'}">-->
            <!--<el-button type="primary">新增学生</el-button>-->
          <!--</router-link>-->
          <hmUpload buttonText="新增学生" :universe="universe" url="/dormitory/student/import" templateUrl="http://app.hm-keji.com/download/dormitory/student.txt"></hmUpload>
          <router-link :to="{name:'dormBuildings'}">
            <el-button type="primary">宿舍楼</el-button>
          </router-link>
          <router-link :to="{name:'dormSupervisors'}">
            <el-button type="primary">宿舍管理员</el-button>
          </router-link>
        </div>
        <div class="el-main-table">
          <hm-table :column="column" :tableData="tableData1" :operation="operation" :pageObj="pageObj1" @handleCurrentChange="_change1" @handleClick="_handleClick" :loading="loading1"></hm-table>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>

</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers,fetchDepart,fetchMajor,fetchClassOption} from '../../../api/universities'
  import {fetchDormBuildings,fetchDormNo,fetchStudentsByclass,fetchStudentByDorm} from '../../../api/dormitory'
  export default{
    data(){
      return {
        tableData: [],
        tableData1:[],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'姓名',minWidth:'90',prop:'student.name'},
          {label:'学号',width:'100',prop:'student.number'},
          {label:'手机号码',width:'120',prop:'student.user.phoneNumber'},
          {label:'班级',width:'150',prop:'student.clazz',formatter:this._nameFormatter},
          {label:'宿舍号',width:'100',prop:'dormitory',formatter:this._dormFormatter},
          {label:'宿管员',minWidth:'150',prop:'houseparent',formatter:this._nameFormatter},
          {label:'辅导员',minWidth:'90',prop:'classLeader',formatter:this._classLeaderFormatter},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'编辑'},
            {name:'删除'},
          ]
        },
        pageObj:{
          size:10,
          total:0,
          currentPage:1
        },
        pageObj1:{
          size:10,
          total:0,
          currentPage:1
        },
        formInline: {
          university: '',
          university1:'',
          institute: '',
          department:'',
          major:'all',
          class:'all',
          building:'all',
          dormNo:'all'
        },
        universe:[],
        depart:[],
        major:[],
        classes:[],
        buildings:[],
        dormNo:[],
        loading:true,
        loading1:true,
        activeName:'first',
        isFirst:true,
        isFirst1:true,
        size:10,
      }
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
    },
    mounted(){
      this._loadAlloptions();
    },
    methods:{
      _loadStudentsByclass(page){
        this.loading=true;
        if(page==0){
          this.pageObj.currentPage=1;
        }
        let obj={
          schoolId:this.formInline.university,
          departId:this.formInline.department,
          majorId:this.formInline.major,
          classId:this.formInline.class,
          page:page,
          size:this.size
        }
        fetchStudentsByclass(obj).then(response=>{
          this.isFirst=false;
          this.loading=false;
          let data=response.data;
          let objectList=data.objectList;
          this.pageObj.total=data.amount;
          this.tableData=[];
          this.tableData=this.tableData.concat(objectList);
        })
      },
      _loadStudentsByDorm(page){
        this.loading1=true;
        if(page==0){
          this.pageObj1.currentPage=1;
        }
        let obj={
          schoolId:this.formInline.university1,
          buildingId:this.formInline.building,
          dormId:this.formInline.dormNo,
          page:page,
          size:this.size
        };
        fetchStudentByDorm(obj).then(response=>{
          this.isFirst1=false;
          this.loading1=false;
          let data=response.data;
          let objectList=data.objectList;
          this.pageObj1.total=data.amount;
          this.tableData1=[];
          this.tableData1=this.tableData1.concat(objectList);
        })
      },
      _handleTabClick(tab, event) {
        if(this.activeName=='second'){
          if(this.buildings.length==0){
            this._loadAlloptions2();
          }
        }
      },
      _loadAlloptions(){
        fetchUnivers().then(response=>{
          let data=response.data;
          this.universe=[];
          this.universe=this.universe.concat(data);
          if(this.universe.length==0){
            this.formInline.university='';
          }
          else{
            this.formInline.university=this.universe[0].id;
            this._loadDepart(this.formInline.university);
          }
        })
      },
      _loadAlloptions2(){
        if(this.universe.length==0){
          fetchUnivers().then(response=>{
            let data=response.data;
            this.univers=[];
            this.universe=this.universe.concat(data);
            this.formInline.university1=this.universe[0].id;
            this._loadDormBuilding(this.formInline.university1);
          })
        }
        else{
          this.formInline.university1=this.universe[0].id;
          this._loadStudentsByDorm(0);
          this._loadDormBuilding(this.formInline.university1);
        }

      },
      _loadDepart(schoolId){
        fetchDepart(schoolId).then(response=>{
          let data=response.data;
          this.depart=[];
          this.depart=this.depart.concat(data);
          if(this.depart.length==0){
            this.formInline.department='';//切换时如果没有数据，就要将原有的数据model清空
          }
          else{
            this.formInline.department=this.depart[0].id;
            this._loadMajor(this.formInline.department);
            if(this.isFirst){
              this._loadStudentsByclass(0);
            }
          }
        })
      },
      _loadMajor(departId){
        fetchMajor(departId).then(response=>{
          let data=response.data;
          this.major=[]
          this.major=this.major.concat(data);
          this.formInline.major='all';
        })
      },
      _loadClass(majorId){
        fetchClassOption(majorId).then(response=>{
          let data=response.data;
          this.classes=[];
          this.classes=this.classes.concat(data);
          this.formInline.class='all'
        })
      },
      _loadDormBuilding(schoolId){
          fetchDormBuildings(schoolId).then(response=>{
            let data=response.data;
            this.buildings=[];
            this.buildings=this.buildings.concat(data);
            this.formInline.building='all'
          })
      },
      _loadDormNo(buildingId){
        fetchDormNo(buildingId).then(response=>{
          let data=response.data;
          this.dormNo=[];
          this.dormNo=this.dormNo.concat(data);
          this.formInline.dormNo='all';
        })
      },
//      _searchByClass(page){
//        this.loading=true;
//        if(page==0){
//            this.pageObj.currentPage=1;
//        }
//        let obj={
//          schoolId:this.formInline.university,
//          departId:this.formInline.department,
//          majorId:this.formInline.major,
//          classId:this.formInline.class,
//          page:page,
//          size:this.size
//        }
//        this._loadStudentsByclass(obj);
//      },
//      _searchByDorm(page){
//        if(page==0){
//          this.pageObj1.currentPage=1;
//        }
//        this.loading1=true;
//        let obj={
//          schoolId:this.formInline.university1,
//          buildingId:this.formInline.building,
//          dormId:this.formInline.dormNo,
//          page:page,
//          size:this.size
//        };
//        this._loadStudentsByDorm(obj);
//      },
      _univerChange(val){
        this._loadDepart(val);
      },
      _univerChange1(val){
        this._loadDormBuilding(val);
      },
      _departChange(val){
        this._loadMajor(val);
      },
      _majorChange(val){
        this._loadClass(val);
      },
      _buildingChnage(val){
        this._loadDormNo(val);
      },
      _handleClick(index){
        if(index==0){
          this._edit();
        }
        if(index==1){
          this._delete();
        }
      },
      _nameFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.name)
          })
        }
        return val.join('、');
      },
      _dormFormatter(row,column,cellValue){
          if(cellValue!=undefined){
              return cellValue.dormitoryBuilding.name+cellValue.name
          }
          else
              return '';
      },
      _classLeaderFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.teacher.name);
          })
        }
        return val.join('、');
      },
      _change(val){
        this._loadStudentsByclass(val-1);
      },
      _change1(val){
        this._loadStudentsByDorm(val-1);
      },
      _edit(){
        alert('edit');
      },
      _delete(){
        alert('delete');
      },
    }
  }
</script>

