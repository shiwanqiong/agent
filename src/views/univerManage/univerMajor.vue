<style lang="scss" scoped>
  .hm-table-top{
    background-color: #ffffff;
    line-height: 60px;
    text-align: left;
    font-size: 16px;
    border-bottom:none;
    /*padding-left:20px;*/
  }
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'universities'}">学校管理</router-link>&nbsp;&gt;&nbsp;
      <!--<router-link :to="{name:'univerCampus'}">管理</router-link>&nbsp;&gt;&nbsp;<router-link :to="{name:'univerInstitute'}">学院</router-link>&nbsp;&gt;&nbsp;-->
      <router-link :to="{name:'univerDepartment',params:{school_id:schoolId}}">系</router-link>&nbsp;&gt;&nbsp;专业
    </p>
    <div class="hm-title-bar">
      广东农工商职业技术学院
    </div>
    <div class="hm-section">
      <div class="hm-table-top">
        {{departName}}-专业
      </div>
      <div class="el-main-table">
        <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading1"></hm-table>
      </div>
    </div>
    <div class="hm-section" v-show="showClass">
      <div class="hm-table-top">
        {{majorName}}-班级
      </div>
      <div class="el-main-table">
        <hm-table :column="column1" :tableData="tableData1" :operation="operation1" :pageObj="pageObj" @handleCurrentChange="_change1" @handleClick="_handleClick1" :loading="loading2"></hm-table>
      </div>
    </div>

  </div>
</template>
<script>
  import hmTable from '../../components/hmTable.vue'
  import {fetchMajor,fetchClass} from '../../api/universities'
  export default{
      data(){
          return {
            tableData: [
            ],
            column:[
              {label:'ID',width:'100',type:'index'},
              {label:'专业名称',minWidth:'100',prop:'name'},
            ],
            tableData1:[],
            column1:[
              {label:'ID',width:'100',type:'index'},
              {label:'班级',minWidth:'100',prop:'name'},
            ],
            operation:{
              label:'操作',
              type:[
                {name:'查看班级'},
              ],
            },
            operation1:{
              label:'操作',
              type:[
                {name:'考勤导出'},
              ],
            },
            pageObj:{
              size:10,
              total:0,
              currentPage:0
            },
            departName:'',
            majorName:'',
            showClass:false,
            schoolId:'',//用来跳转到系（需要学校id）
            departId:'',
            majorId:'',
            loading1:true,
            loading2:true
          }
      },
      components:{
        hmTable:hmTable
      },
      created(){
        this.schoolId=window.sessionStorage.getItem('schoolId');
        this.departId=this.$route.params.depart_id;
        this.departName=this.$route.params.depart_name;
        this._loadMajor(this.departId);
      },
      methods:{
        _loadMajor(departId){
          fetchMajor(departId).then(response=>{
              this.loading1=false;
              let data=response.data;
              this.tableData=this.tableData.concat(data);
          })
        },
        _loadClass(majorId,page,size){
          fetchClass(majorId,page,size).then(response=>{
            this.loading2=false;
            let data=response.data;
            let objectList=data.objectList;
            this.tableData1=[];
            this.tableData1=this.tableData1.concat(objectList);
            this.pageObj.total=data.amount;
//            this.backupData1[majorId]=this.tableData1;
//            this.backupData1[majorId].total=data.amount;
          })
        },
        _showClass(scope){
          if(this.majorId==scope.row.id){
            this.showClass=!this.showClass;
          }
          else{
            if(this.showClass==false){
              this.showClass=true;
            }
          }
          this._loadClass(scope.row.id,0,this.pageObj.size);
//          if(scope.row.id in this.backupData1){
//            this.tableData1=[];
//            this.tableData1=this.tableData1.concat(this.backupData1[scope.row.id]);
//            this.pageObj.total=this.backupData1[scope.row.id].total;
//          }
//          else{
//            this._loadClass(scope.row.id,0,this.pageObj.size);
//          }
          this.majorName=scope.row.name;
          this.majorId=scope.row.id;
        },
        _change1(val){
          this._loadClass(this.majorId,val-1,this.pageObj.size);
        },
        _change(val){
          alert(val);
        },
        _edit(){
          alert(3333);
        },
        _handleClick1(index){
        },
        _handleClick(index,scope){
          this._showClass(scope);
        }
      }
  }
</script>
