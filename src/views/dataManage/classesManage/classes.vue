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
            <!--<hm-univers-select></hm-univers-select>-->
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="课节名称">
              <el-input placeholder="课节名称" v-model="formInline.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_searchClass(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增课节</el-button>
      </router-link>
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">批量导入</el-button>-->
      <!--</router-link>-->
      <hmUpload :universe="univers" url="/lessons/import" templateUrl="http://app.hm-keji.com/download//lessons.txt"></hmUpload>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :pageObj="pageObj" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
//  import hmUniversSelect from '../../components/hmUniversSelect.vue'
  import {fetchClass,searchClass} from '../../../api/classes'
  import {fetchUnivers} from '../../../api/universities'
  import {time} from '../../../utils/time'
  export default{
    data(){
      return {
        tableData: [
          {
            univer:'中山职业技术学院',
            className: '高等数学',
            startTime:'2017-10-12 8:00',
            endTime:'2017-10-12 10:00'
          },
          {
            univer:'中山职业技术学院',
            className: '高等数学',
            startTime:'2017-10-12 8:00',
            endTime:'2017-10-12 10:00'
          },
          {
            univer:'中山职业技术学院',
            className: '高等数学',
            startTime:'2017-10-12 8:00',
            endTime:'2017-10-12 10:00'
          },
          {
            univer:'中山职业技术学院',
            className: '高等数学',
            startTime:'2017-10-12 8:00',
            endTime:'2017-10-12 10:00'
          },
          {
            univer:'中山职业技术学院',
            className: '高等数学',
            startTime:'2017-10-12 8:00',
            endTime:'2017-10-12 10:00'
          },
        ],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'学校',minWidth:'120',prop:'school.name'},
          {label:'课节名称',minwidth:'100',prop:'name'},
          {label:'开始时间',minWidth:'80',prop:'startTime',formatter:this._timeFormatter},
          {label:'结束时间',minWidth:'80',prop:'endTime',formatter:this._timeFormatter},
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
        type:0,
        loading:true,
        formInline: {
          university: '',
          name:null
        },
        univers:[]
      }
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
//      hmUniversSelect:hmUniversSelect
    },
    created(){
      this._loadData(0,this.pageObj.size);
      this._loadUnivers();
    },
    methods:{
      _loadData(page,size){
        fetchClass(page,size).then(response=>{
            this.loading=false;
            let data=response.data;
            let objectList=data.objectList;
            this.pageObj.total=data.amount;
            this.tableData=[];
            this.tableData=this.tableData.concat(objectList);
        })
      },
      _searchClass(page){
        this.loading=true;
        if(page==0){
          this.pageObj.currentPage=1;
        }
        if(this.formInline.university==''&&this.formInline.name==null){
          return;
        }
        this.type=1;
        let params={
          page:page,
          size:this.pageObj.size,
          schoolId:this.formInline.university,
          name:this.formInline.name==''?null:this.formInline.name,
        }
        searchClass(params).then(response=>{
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
      _timeFormatter(row,column,cellValue){
        return time(cellValue,'H:mm:ss');
      },
      _change(val){
        this.loading=true;
        if(this.type==0){
          this._loadData(val-1,this.pageObj.size);
        }
        else if(this.type==1){
          this._searchClass(val-1);
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

