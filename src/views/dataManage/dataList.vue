<style lang="scss" scoped>
  .hm-searchBar{
    padding-bottom:20px;
    margin-bottom:20px;
  }
  .el-select{
    width:100%;
  }
  .hm-link-panel{
    overflow: hidden;
  }
  .hm-link-panel .el-col{
    text-align: center;
  }
  .hm-linkPanel{
    display: inline-block;
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color:#FF8556;
    margin-bottom:20px;
    color:#fff;
    line-height: 100px;
    cursor: pointer;
  }
</style>
<template>
  <div class="el-university">
    <div class="hm-link-panel">
      <el-col :xs="6" :sm="6" :md="6" :lg="3">
        <router-link :to="{name:'students'}" tag="span" class="hm-linkPanel">学生管理</router-link>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3">
        <router-link :to="{name:'teachers'}" tag="span" class="hm-linkPanel">教师管理</router-link>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3"><router-link :to="{name:'counsellors'}" tag="span" class="hm-linkPanel">辅导员管理</router-link></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3"><router-link :to="{name:'courses'}" tag="span" class="hm-linkPanel">课程管理</router-link></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3"><router-link :to="{name:'classes'}" tag="span" class="hm-linkPanel">课节管理</router-link></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3"><router-link :to="{name:'addresses'}" tag="span" class="hm-linkPanel">地点管理</router-link></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="3"><router-link :to="{name:'dormitorys'}" tag="span" class="hm-linkPanel">宿舍管理</router-link></el-col>
    </div>
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
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../components/hmTable.vue'
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
        ],
        operation:{
          label:'操作',
          type:[
            {name:'管理'},
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

