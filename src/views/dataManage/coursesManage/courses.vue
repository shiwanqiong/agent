<template>
  <el-tabs v-model="activeName" @tab-click="_handleTabClick">
    <el-tab-pane label="按班级查询" name="first">
      <div class="el-university">
        <div class="hm-searchBar">
          <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
            <el-row>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="学校">
                  <el-select placeholder="学校" v-model="formInline.university" @change="_univerChange">
                    <el-option v-for="item in univers" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <!--<el-col :xs="24" :sm="12" :md="6" :lg="6">-->
                <!--<el-form-item label="学院">-->
                  <!--<el-select placeholder="学院" v-model="formInline.institute">-->
                    <!--<el-option label="计算机学院" value="institute1"></el-option>-->
                    <!--<el-option label="交通学院" value="institute2"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="系">
                  <el-select placeholder="系" v-model="formInline.department" @change="_departChange">
                    <el-option v-for="item in depart" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="专业">
                  <el-select placeholder="专业" v-model="formInline.major" @change="_majorChange">
                    <el-option v-for="item in major" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="班级">
                  <el-select placeholder="班级" v-model="formInline.class">
                    <el-option v-for="item in classes" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <!--<el-col :xs="24" :sm="12" :md="6" :lg="6">-->
                <!--<el-form-item label="班级">-->
                  <!--<el-select placeholder="班级" v-model="formInline.institute">-->
                    <!--<el-option label="计算机学院" value="institute1"></el-option>-->
                    <!--<el-option label="交通学院" value="institute2"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item label="日期">
                  <el-date-picker
                    v-model="dateVal"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6">
                <el-form-item>
                  <el-button type="primary" @click="_searchByclass">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="hm-btn-panel">
          <!--<router-link :to="{name:'univerAdd'}">-->
            <!--<el-button type="primary">课程表导入</el-button>-->
          <!--</router-link>-->
          <hmUpload :universe="univers" :isDate="true" dialogTitle="课程表导入" url="/timetable/import" templateUrl="http://app.hm-keji.com/download/timetable.txt"></hmUpload>
        </div>
        <div class="el-main-table">
          <hm-table :column="column" :tableData="tableData1" @handleCurrentChange="_change" :paging="false" :loading="loading1"></hm-table>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="按课室查询" name="second">
      <div class="el-university">
        <div class="hm-searchBar">
          <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
            <el-row>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="学校">
                  <el-select placeholder="学校" v-model="formInline.university1" @change="_univerChange1">
                    <el-option v-for="item in univers" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="教学楼">
                  <el-select placeholder="教学楼" v-model="formInline.building" @change="_buildingChange">
                    <el-option v-for="item in building" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="课室">
                  <el-select placeholder="课室" v-model="formInline.classroom">
                    <el-option v-for="item in classroom" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="5" :lg="5">
                <el-form-item label="日期">
                  <el-date-picker
                    v-model="dateVal1"
                    type="date">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="4" :lg="4">
                <el-form-item>
                  <el-button type="primary" @click="_searchByclassroom">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="hm-btn-panel">
          <!--<router-link :to="{name:'univerAdd'}">-->
            <!--<el-button type="primary">课程表导入</el-button>-->
          <!--</router-link>-->
          <!--<hmUpload dialogTitle="课程表导入" :universe="univers" :url="/student/import"></hmUpload>-->
          <hmUpload :universe="univers" :isDate="true" dialogTitle="课程表导入" url="/timetable/import" templateUrl="http://app.hm-keji.com/download/timetable.txt"></hmUpload>
        </div>
        <div class="el-main-table">
          <hm-table :column="column" :tableData="tableData2" @handleCurrentChange="_change" :paging="false" :pageObj="pageObj" :loading="loading2"></hm-table>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers,fetchDepart,fetchMajor,fetchClassOption,fetchBuildings,fetchClassroom} from '../../../api/universities'
  import {fetchCourse,fetchByClassRoom} from '../../../api/courses'
  import {time} from '../../../utils/time'
  export default {
    data() {
      return {
//        pickerOptions0: {
//          disabledDate(time) {
//            return time.getTime() > Date.now();
//          }
//        },
        activeName: 'first',
        tableData1: [],
        tableData2: [],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'系',width:'120',prop:'clazz.specialty.department.name'},
          {label:'专业',minWidth:'120',prop:'clazz.specialty.name'},
          {label:'班级',minWidth:'100',prop:'clazz',formatter:this._classFormatter},
          {label:'星期',width:'100',prop:'week',formatter:this._weekFormatter},
          {label:'课程',minWidth:'120',prop:'teachBinding.course.name'},
          {label:'主讲老师',width:'100',prop:'teachBinding.teacher.name'},
          {label:'教室',minWidth:'120',prop:'classroom',formatter:this._classroomFormatter},
          {label:'课节',minWidth:'100',prop:'lessons',formatter:this._scheduleFormatter},
        ],
        pageObj:{
          size:10,
          total:0,
          currentPage:0
        },
        dateVal:new Date(),
        dateVal1:new Date(),
        loading1:false,
        loading2:false,
        univers:[],
        depart:[],
        major:[],
        classes:[],
        building:[],
        classroom:[],
        formInline: {
          university: '',
          university1:'',
          institute: '',
          department:'',
          major:'',
          class:'',
          classroom:'',
          building:''
        },
        isFirst:true,
        isFirst1:true
      };
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
    },
    created(){
      this._loadAlloptions();
    },
//    mounted(){
//      this._loadData(this.dateVal,this.formInline.class);
//    },
    methods: {
      _loadData(dateVal,classId){
        fetchCourse(dateVal,classId).then(response=>{
            this.isFirst=false;
            this.loading1=false;
            let data=response.data;
            this.tableData1=[];
            this.tableData1=this.tableData1.concat(data);
        })
      },
      _loadDataClassroom(dateVal,classroomId){
        fetchByClassRoom(dateVal,classroomId).then(response=>{
          this.loading2=false;
          let data=response.data;
          this.tableData2=[];
          this.tableData2=this.tableData2.concat(data);
        })
      },
      _loadAlloptions(){
        fetchUnivers().then(response=>{
            let data=response.data;
            this.univers=[];
            this.univers=this.univers.concat(data);
            this.formInline.university=this.univers[0].id;
            this._loadDepart(this.formInline.university);
        })
      },
      _loadAlloptions2(){
          if(this.univers.length==0){
            fetchUnivers().then(response=>{
              let data=response.data;
              this.univers=this.univers.concat(data);
            })
          }
          this.formInline.university1=this.univers[0].id;
          this._loadBuilding(this.formInline.university1);
      },
      _loadDepart(schoolId){
        fetchDepart(schoolId).then(response=>{
            let data=response.data;
//            console.log('depart:'+JSON.stringify(data))
            this.depart=[];
            this.depart=this.depart.concat(data);
            this.formInline.department=this.depart[0].id;
            this._loadMajor(this.formInline.department);
        })
      },
      _loadMajor(departId){
        fetchMajor(departId).then(response=>{
          let data=response.data;
          this.major=[]
          this.major=this.major.concat(data);
          this.formInline.major=this.major[0].id;
          this._loadClass(this.formInline.major);
        })
      },
      _loadClass(majorId){
        fetchClassOption(majorId).then(response=>{
          let data=response.data;
          this.classes=[];
          this.classes=this.classes.concat(data);
          this.formInline.class=this.classes[0].id;
          if(this.isFirst){
            this._loadData(Date.parse(this.dateVal),this.formInline.class);
          }
        })
      },
      _loadBuilding(schoolId){
        fetchBuildings(schoolId).then(response=>{
            let data=response.data;
            this.building=[];
            this.building=this.building.concat(data);
            this.formInline.building=this.building[0].id;
            this._loadClassroom(this.formInline.building)

        })
      },
      _loadClassroom(buildingId){
        fetchClassroom(buildingId).then(response=>{
            let data=response.data;
//          console.log(JSON.stringify(data));
            this.classroom=[];
            this.classroom=this.classroom.concat(data);
            this.formInline.classroom=this.classroom[0].id;
            if(this.isFirst1){
              this.isFirst1=false;
              let date=Date.parse(this.dateVal1);
              let classroomId=this.formInline.classroom;
              this._loadDataClassroom(date,classroomId);
            }
        })
      },
      _scheduleFormatter(row,column,cellValue){
        let name='';
        let starTime='';
        let endTime='';
        if(cellValue!=undefined){
          name=cellValue.name;
          starTime=time(cellValue.startTime,'H:mm');
          endTime=time(cellValue.endTime,'H:mm')
        }
        return name+'（'+starTime+'-'+endTime+'）';
      },
      _classroomFormatter(row,column,cellValue){
        let classroom='';
        if(cellValue!=undefined&&cellValue!=null){
          classroom+=cellValue.building.name+cellValue.name;
        }
        return classroom;
      },
      _classFormatter(row,column,cellValue){
        let classes='';
        if(cellValue!=undefined&&cellValue!=null){
          classes+=cellValue.grade.name+cellValue.name
        }
        return classes;
      },
      _weekFormatter(row,column,cellValue){
        if(cellValue!=undefined&&cellValue!=null){
            switch(cellValue){
              case 'Monday':
                  return '星期一';
                  break;
              case 'Tuesday':
                  return '星期二';
                  break;
              case 'Wednesday':
                  return '星期三';
                  break;
              case 'Thursday':
                  return '星期四';
                  break;
              case 'Friday':
                  return '星期五';
                  break;
              case 'Saturday':
                  return '星期六';
                  break;
              case 'Sunday':
                  return '星期日';
                  break;
            }
        }
        else{
            return '';
        }
      },
      _univerChange(val){
        this._loadDepart(val);
      },
      _univerChange1(val){
        this._loadBuilding(val);
      },
      _departChange(val){
        this._loadMajor(val);
      },
      _majorChange(val){
        this._loadClass(val);
      },
      _buildingChange(val){
        this._loadClassroom(val);
      },
      _searchByclass(){
        this.loading1=true;
        let date=Date.parse(this.dateVal);
        let classId=this.formInline.class;
        this._loadData(date,classId);
      },
      _searchByclassroom(){
        this.loading2=true;
        let date=Date.parse(this.dateVal1);
        let classroomId=this.formInline.classroom;
        this._loadDataClassroom(date,classroomId);
      },
      _handleTabClick(tab, event) {
        if(this.activeName=='second'){
            if(this.classroom.length==0){
              this._loadAlloptions2();
            }
        }
      },
      _handleClick(index){
        if(index==0){
          this._edit();
        }
        if(index==1){
          this._delete();
        }
      },
      _change(val){
        alert(val);
      },
      _edit(){
        alert('edit');
      },
      _delete(){
        alert('delete');
      },
    },
  };
</script>
