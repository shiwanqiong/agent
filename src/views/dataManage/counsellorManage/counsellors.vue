<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="学校">
              <el-select placeholder="学校" v-model="formInline.university">
                <el-option label="全部" value="all"></el-option>
                <el-option v-for="item in univers" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="辅导员">
              <el-input placeholder="辅导员名称" v-model="formInline.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_searchCounsellor(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增辅导员</el-button>
      </router-link>
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">批量导入</el-button>-->
      <!--</router-link>-->
      <hmUpload :universe="univers" url="/classLeader/import" templateUrl="http://app.hm-keji.com/download/classleader.txt"></hmUpload>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :pageObj="pageObj" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers} from '../../../api/universities'
  import {fetchCounsellor,searchCounsellor} from '../../../api/counsellors'
  export default{
    data(){
      return {
        tableData: [],
        column:[
          {label:'教师ID',width:'100',type:'index'},
          {label:'姓名',minWidth:'120',prop:'teacher.name'},
          {label:'学校',minWidth:'150',prop:'teacher.school.name'},
          {label:'性别',width:'120',prop:'teacher.gender'},
          {label:'手机号码',minWidth:'100',prop:'teacher.user.phoneNumber'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'编辑'},
            {name:'删除'},
          ],
        },
        pageObj:{
          size:10,
          total:0,
          currentPage:0
        },
        univers:[],
        type:0,
        formInline: {
          university: '',
          name:null
        },
        loading:true
      }
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
    },
    created(){
      this._loadCounsellor(0,this.pageObj.size);
      this._loadUnivers();
    },
    methods:{
      _loadCounsellor(page,size){
          fetchCounsellor(page,size).then(response=>{
            this.loading=false;
            let data=response.data;
            let objectList=data.objectList;
            this.pageObj.total=data.amount;
            this.tableData=[];
            this.tableData=this.tableData.concat(objectList)
          })
      },
      _searchCounsellor(page){
        this.loading=true;
        if(page==0){
          this.pageObj.currentPage=1;
        }
        this.loading=true;
        if(this.formInline.university==''&&this.formInline.name==null){
          return;
        }
        this.type=1;
        let params={
          page:page,
          size:this.pageObj.size,
          schoolId:this.formInline.university,
          name:this.formInline.name==''?null:this.formInline.name
        }
        searchCounsellor(params).then(response=>{
          this.loading=false;
          let data=response.data;
          let objectList=data.objectList;
          this.pageObj.total=data.amount;
          this.tableData=[];
          this.tableData=this.tableData.concat(objectList);
        })
      },
      _loadUnivers(){
        fetchUnivers().then(response=>{
          let data=response.data;
          this.univers=this.univers.concat(data);
        })
      },
      _change(val){
        this.loading=true;
        if(this.type==0){
          this._loadCounsellor(val-1,this.pageObj.size);
        }
        else if(this.type==1){
          this._searchCounsellor(val-1);
        }
      },
      _edit(){
          alert(2222);
      },
      _delete(){
          alert(3333);
      },
      _handleClick(index){
        if(index==0){
          this._edit();
        }
        if(index==1){
          this._delete();
        }
      }

    }

  }
</script>

