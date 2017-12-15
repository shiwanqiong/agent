<style lang="scss" scoped>
  .hm-searchBar{
    padding-bottom:20px;
  }
  .el-select{
    width:100%;
  }
</style>
<template>
  <div class="el-university">
    <div class="hm-searchBar">
      <el-row>
        <el-col :xs="14" :sm="14" :md="8" :lg="8" >
          <el-select v-model="school" filterable allow-create clearable placeholder="学校">
            <el-option
              v-for="item in univers"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="9" :sm="6" :md="4" :lg="3" ><el-button type="primary" icon="el-icon-search" @click="_searchUniver">搜索</el-button></el-col>
      </el-row>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增学校</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
//  import {fetchUnivers} from '../../api/universities'
  export default{
    data(){
      return {
        tableData:[],
        backUp:[],
        column:[
          {label:'学校ID',width:'120',type:'index'},
          {label:'学校名称',minWidth:'120',prop:'name'},
          {label:'地址',minWidth:'130',prop:'address'},
          {label:'状态',width:'120',prop:'status'},
          {label:'创建时间',minWidth:'120',prop:'createTime'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'详情'},
            {name:'编辑'},
          ],
        },
        school:'',
        univers:[],
        loading:false
      }
    },
    components:{
      hmTable:hmTable
    },
    created(){
      this._loadData();
    },
    methods:{
      _searchUniver(){
        this.tableData=[];
        this.tableData=this.tableData.concat(this.backUp);
        if(this.school==''){
          this.tableData=[];
          this.tableData=this.tableData.concat(this.backUp);
        }
        else{
          this.tableData=this.tableData.filter(item=>{
            return item.id==this.school;
          })
        }
      },
      _change(val){
        alert(val);
      },
      _jump(univerId){
        this.$router.push({name:'univerDepartment',params:{school_id:univerId}})
      },
      _loadData(){
      },
      _edit(){
        alert(3333);
      },
      _handleClick(index,scope){
        if(index==0){
          if(!window.sessionStorage.schoolId){
            window.sessionStorage.setItem('schoolId',scope.row.id);
          }
          else{
            window.sessionStorage.setItem('schoolId',scope.row.id);
          }
          this._jump(scope.row.id);
        }
        if(index==1){
          this._edit();
        }
      }
    }

  }
</script>

