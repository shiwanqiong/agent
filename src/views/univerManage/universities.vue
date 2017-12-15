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
          <el-select v-model="school" filterable allow-create clearable placeholder="请选择">
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
  import hmTable from '../../components/hmTable.vue'
  import {fetchUnivers} from '../../api/universities'
  export default{
      data(){
          return {
            tableData:[],
            backUp:[],
            column:[
              {label:'学校ID',width:'120',type:'index'},
              {label:'名称',minWidth:'100',prop:'name'},
              {label:'地址',minWidth:'150',prop:'address'},
            ],
            operation:{
              label:'操作',
              type:[
                {name:'查看系'},
                {name:'编辑'},
              ],
            },
            school:'',
            univers:[],
            loading:true
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
          fetchUnivers().then(response=>{
            this.loading=false;
            let data=response.data;
            this.backUp=this.backUp.concat(data);
            this.tableData=[];
            this.tableData=this.tableData.concat(data);
            this.univers=this.univers.concat(data);
          })
        },
        _delete(){
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
            this._delete();
          }
        }
      }

  }
</script>

