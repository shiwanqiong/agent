<template>
  <div class="el-university">
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="100px" :modle="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="8">
            <el-form-item label="代理级别">
              <el-select placeholder="代理级别" v-model="formInline.agentGrade" @change="">
                <el-option label="全部" :value="0"></el-option>
                <el-option v-for="item in agentGrades" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8">
            <el-form-item label="地区">
              <el-select placeholder="地区" v-model="formInline.area" @change="">
                <el-option  label="全部" :value="0"></el-option>
                <el-option v-for="item in areas" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8">
            <el-form-item label="日期">
              <el-date-picker
                v-model="formInline.dateVal"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="8">
            <el-form-item label="代理商名称">
              <el-input placeholder="代理商名称" v-model="formInline.agentName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6" style="text-align: right">
            <el-form-item>
              <el-button type="primary" @click="">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:''}">
        <el-button type="primary">审批记录</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import {time} from '../../../utils/time'
  export default {
    data() {
      return {
        tableData: [],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'代理商名称',minWidth:'100',prop:'clazz.specialty.department.name'},
          {label:'代理级别',width:'120',prop:'clazz.specialty.name'},
          {label:'所在地区',minWidth:'100',prop:'clazz'},
          {label:'创建日期',width:'120',prop:'week'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'详情'},
            {name:'同过'},
            {name:'驳回'}
          ],
        },
        pageObj:{
          size:10,
          total:0,
          currentPage:0
        },
        dateVal:new Date(),
        loading:false,
        agentGrades:[
          {name:'一级代理商',id:'1'},
          {name:'二级代理商',id:'2'},
          {name:'三级代理商',id:'3'},
        ],
        areas:[
          {name:'广东省',id:'1'},
          {name:'浙江省',id:'2'},
          {name:'福建省',id:'3'},
          {name:'湖南省',id:'4'},
          {name:'广西省',id:'5'},
          {name:'其他',id:'6'},
        ],
        formInline: {
          agentGrade: '',
          area:'',
          dateVal:'',
          agentName:''
        },
      };
    },
    components:{
      hmTable:hmTable,
    },
    created(){
    },
    methods: {
      _scheduleFormatter(row,column,cellValue){
//        let name='';
//        let starTime='';
//        let endTime='';
//        if(cellValue!=undefined){
//          name=cellValue.name;
//          starTime=time(cellValue.startTime,'H:mm');
//          endTime=time(cellValue.endTime,'H:mm')
//        }
//        return name+'（'+starTime+'-'+endTime+'）';
      },
      _handleClick(index){
        if(index==0){
          this._jumpToDetail();
        }
        if(index==1){
          this._delete();
        }
      },
      _change(val){
      },
      _jumpToDetail(){
        alert('edit');
      },
      _delete(){
        alert('delete');
      },
    },
  };
</script>
