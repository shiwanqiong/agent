<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'universities'}">学校管理</router-link>&nbsp;&gt;&nbsp;系
      <!--<router-link :to="{name:'univerCampus'}">管理</router-link>&nbsp;&gt;&nbsp;<router-link :to="{name:'univerInstitute'}">学院</router-link>&nbsp;&gt;&nbsp;系-->
    </p>
    <div class="hm-title-bar">
      广东农工商职业技术学院
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'departAdd'}">
        <el-button type="primary">新增系</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
      <!--<hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false"></hm-table>-->
    </div>
  </div>
</template>
<script>
  import hmTable from '../../components/hmTable.vue'
  import {fetchDepart} from '../../api/universities'
  export default{
      data(){
          return {
            tableData: [
            ],
            column:[
              {label:'ID',width:'100',type:'index'},
              {label:'系名称',minWidth:'100',prop:'name'},
            ],
            operation:{
              label:'操作',
              type:[
                {name:'查看专业'},
                {name:'编辑'},
              ],
            },
            schoolId:'',
            loading:true
          }
      },
      components:{
        hmTable:hmTable
      },
      created(){
        this.schoolId=this.$route.params.school_id;
        this._loadData(this.schoolId);
      },
      methods:{
        _loadData(schoolId){
          fetchDepart(schoolId).then(response=>{
            this.loading=false;
            let data=response.data;
            this.tableData=this.tableData.concat(data);
          })
        },
//        _change(val){
//          alert(val);
//        },
        _jumpToMajor(scope){
          this.$router.push({name:'univerMajor',params:{depart_id:scope.row.id,depart_name:scope.row.name}})
        },
        _edit(){
//          alert(3333);
        },
        _handleClick(index,scope){
          if(index==0){
            this._jumpToMajor(scope);
          }
          if(index==1){
            this._edit();
          }
        }
      }
  }
</script>
