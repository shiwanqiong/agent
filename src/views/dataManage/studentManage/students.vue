<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="60" label-position="left" :modle="formInline" class="demo-form-inline">
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
                <el-option v-for="item  in depart" :label="item.name" :value="item.id"></el-option>
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
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="姓名">
              <el-input placeholder="姓名" v-model="formInline.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="学号">
              <el-input placeholder="学号" v-model="formInline.sNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_loadStudents(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">新增学生</el-button>-->
      <!--</router-link>-->
      <hmUpload :universe="univers" buttonText="新增学生" url="/student/import" templateUrl="http://app.hm-keji.com/download/student.txt"></hmUpload>
      <!--<hmUpload :universe="univers" buttonText="新增用户" url="/student/binding"></hmUpload>-->
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">新增用户</el-button>-->
      <!--</router-link>-->
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" :pageObj="pageObj" @handleCurrentChange="_change" @handleClick="_handleClick" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers,fetchDepart,fetchMajor,fetchClassOption} from '../../../api/universities'
  import {fetchStudents} from '../../../api/students'
  import {time} from '../../../utils/time'
  import util from '../../../utils/util'
//  import hmUniverSelect from '../../components/hmUniversSelect.vue'
  export default{
    data(){
      return {
        tableData: [
          {
            name: '欧阳菜菜',
            Sno:'1231221',
            telNo:'13326575623',
            univer:'中山职业技术学院',
            depart:'体验学院',
            major:'商务英语',
            grade:'2017',
            class:'商务英语1班',
            regTime:'2017-09-16'
          },
          {
            name: '菜菜',
            Sno:'1231221',
            telNo:'13326575623',
            univer:'中山职业技术学院',
            depart:'体验学院',
            major:'商务英语',
            grade:'2017',
            class:'商务英语1班',
            regTime:'2017-09-16'
          },
          {
            name: '菜菜',
            Sno:'1231221',
            telNo:'13326575623',
            univer:'中山职业技术学院',
            depart:'体验学院',
            major:'商务英语',
            grade:'2017',
            class:'商务英语1班',
            regTime:'2017-09-16'
          },
          {
            name: '菜菜',
            Sno:'1231221',
            telNo:'13326575623',
            univer:'中山职业技术学院',
            depart:'体验学院',
            major:'商务英语',
            grade:'2017',
            class:'商务英语1班',
            regTime:'2017-09-16'
          },
          {
            name: '菜菜',
            Sno:'1231221',
            telNo:'13326575623',
            univer:'中山职业技术学院',
            depart:'体验学院',
            major:'商务英语',
            grade:'2017',
            class:'商务英语1班',
            regTime:'2017-09-16'
          },
        ],
        column:[
          {label:'姓名',minWidth:'90',prop:'name'},
          {label:'学号',width:'130',prop:'number'},
          {label:'手机号码',minWidth:'120',prop:'user.phoneNumber'},
          {label:'学校',minWidth:'150',prop:'school.name'},
          {label:'系',minWidth:'120',prop:'clazz',formatter:this._departFormatter},
          {label:'专业',minWidth:'120',prop:'clazz',formatter:this._majorFormatter},
          {label:'年级',width:'80',prop:'clazz',formatter:this._gradeFormatter},
          {label:'班级',width:'150',prop:'clazz',formatter:this._classFormatter},
          {label:'注册时间',width:'100',prop:'bindingDatetime',formatter:this._timeFormatter},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'编辑'},
            {name:'删除'},
          ]
        },
        pageObj:{
          total:0,
          size:10,
          currentPage:0
        },
        loading:true,
        univers:[],
        depart:[],
        major:[],
        classes:[],
        formInline: {
          university: '',
          institute: '',
          department:'',
          major:'',
          class:'',
          name:'',
          sNo:''
        },
        isFirst:true
      }
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
//      hmUniverSelect:hmUniverSelect
    },
    mounted(){
      this._loadAlloptions();
    },
    methods:{
      _loadStudents(page){
        this.loading=true;
        if(page==0){
          this.pageObj.currentPage=1;
        }
        if(this.formInline.name==''&&this.formInline.sNo==''){
            if(this.formInline.department==''){
              this.formInline.university=this.univers[0].id;
              this.formInline.department=this.depart[0].id;
              this.formInline.major=this.major[0].id;
              this.formInline.class=this.classes[0].id;
            }
        }
        let obj={
          schoolId:this.formInline.university,
          departId:this.formInline.department,
          majorId:this.formInline.major,
          classId:this.formInline.class,
          name:this.formInline.name,
          studentNo:this.formInline.sNo,
          page:page,
          size:this.pageObj.size
        };
        fetchStudents(obj).then(response=>{
          this.isFirst=false;
          this.loading=false;
          let data=response.data;
          let objectList=data.objectList;
          this.pageObj.total=data.amount;
          this.tableData=[];
          this.tableData=this.tableData.concat(objectList);
          if(!(this.formInline.name==''&&this.formInline.sNo=='')){
            this.formInline.university='';
            this.formInline.department='';
            this.formInline.major='';
            this.formInline.class='';
          }
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
      _loadDepart(schoolId){
        fetchDepart(schoolId).then(response=>{
          let data=response.data;
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
            this._loadStudents(0);
          }
        })
      },
      _univerChange(val){
        this._loadDepart(val);
      },
      _departChange(val){
        this._loadMajor(val);
      },
      _majorChange(val){
        this._loadClass(val);
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
        this._loadStudents(val-1);
      },
      _timeFormatter(row,column,cellValue){
        if(cellValue!=undefined&&cellValue!=null&&cellValue!=''){
          return time(cellValue,'YYYY-MM-DD H:mm:ss');
        }
        else{
            return '';
        }
      },
      _departFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
            cellValue.forEach(item=>{
              val.push(item.specialty.department.name)
            })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
      },
      _majorFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.specialty.name)
          })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
      },
      _gradeFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.grade.name)
          })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
      },
      _classFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.name)
          })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
      },
      _edit(){
        alert('edit');
      },
      _delete(){
        alert('delete');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }

  }
</script>

