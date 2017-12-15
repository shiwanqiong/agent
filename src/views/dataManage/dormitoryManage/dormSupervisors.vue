<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'dormitorys'}">宿舍管理</router-link>&nbsp;&gt;&nbsp;宿舍管理员
    </p>
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="学校">
              <el-select placeholder="学校" v-model="formInline.university">
                <el-option v-for="item in universe" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="宿管员">
              <el-input placeholder="宿管员姓名" v-model="formInline.houseparent"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_loadHouseparent(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增宿管员</el-button>
      </router-link>
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">批量导入</el-button>-->
      <!--</router-link>-->
      <hmUpload :universe="universe" url="/houseparent/import" templateUrl="http://app.hm-keji.com/download/dormitory/houseparent.txt"></hmUpload>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :pageObj="pageObj" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers} from '../../../api/universities'
  import {fetchHouseparent} from '../../../api/dormitory'
  import util from '../../../utils/util'
  export default{
    data(){
      return {
        tableData: [],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'学校',minWidth:'100',prop:'houseparent.teacher.school.name'},
          {label:'电话',minWidth:'100',prop:'houseparent.phoneNumber'},
          {label:'宿管员',width:'100',prop:'houseparent.name'},
          {label:'宿舍楼',minWidth:'120',prop:'building',formatter:this._buildingFormatter},
          {label:'地点',minWidth:'100',prop:'building',formatter:this._addressFormatter},
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
        universe:[],
        loading:false,
        formInline: {
          university: '',
          houseparent:'',
        }
      }
    },
    components:{
      hmTable:hmTable,
      hmUpload:hmUpload
    },
    mounted(){
      this._loadAlloptions();
    },
    methods:{
      _loadHouseparent(page){
          if(page==0){
              this.pageObj.currentPage=1;
          }
          this.loading=true;
          let obj={
            schoolId:this.formInline.university,
            houseparentId:this.formInline.houseparent==''?null:this.formInline.houseparent,
            page:page,
            size:this.pageObj.size
          };
          fetchHouseparent(obj).then(response=>{
              this.loading=false;
              let data=response.data;
              let objectList=data.objectList;
              this.pageObj.total=data.amount;
              this.tableData=[];
              this.tableData=this.tableData.concat(objectList);
          })
      },
      _loadAlloptions(){
        fetchUnivers().then(response=>{
          let data=response.data;
          this.universe=[];
          this.universe=this.universe.concat(data);
          this.formInline.university=this.universe[0].id;
          this._loadHouseparent(0)
        })
      },
      _change(val){
        this._loadHouseparent(val-1);
      },
      _buildingFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
            cellValue.forEach(item=>{
                val.push(item.name);
            })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
      },
      _addressFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.place.address);
          })
        }
        let newVal=util.unique(val);
        return newVal.join('、')
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

