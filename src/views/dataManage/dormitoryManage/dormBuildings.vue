<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'dormitorys'}">宿舍管理</router-link>&nbsp;&gt;&nbsp;宿舍楼
    </p>
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="学校">
              <el-select placeholder="学校" v-model="formInline.university" @change="_univerChange">
                <el-option v-for="item in universe" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="宿舍楼">
              <el-select placeholder="宿舍楼" v-model="formInline.building">
                <el-option label="全部" value="all"></el-option>
                <el-option v-for="item in buildings" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_loadBuildingData(0)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增宿舍楼</el-button>
      </router-link>
      <!--<router-link :to="{name:'univerAdd'}">-->
        <!--<el-button type="primary">批量导入</el-button>-->
      <!--</router-link>-->
      <hmUpload :universe="universe" url="/dormitory/building/import" :isAddr="true" templateUrl="http://app.hm-keji.com/download/dormitory/building.txt"></hmUpload>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" :pageObj="pageObj" @handleCurrentChange="_change" @handleClick="_handleClick" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import hmUpload from '../../../components/hmUpload.vue'
  import {fetchUnivers,fetchBuildings} from '../../../api/universities'
  import {fetchDormBuildings,fetchAllBuildings} from '../../../api/dormitory'
  import util from '../../../utils/util'
  export default{
    data(){
      return {
        tableData: [
//          {
//            univer:'中山职业技术学院',
//            dormBuildings: '1号楼',
//            dormSupervisor:'张三',
//            dormQty:'20个宿舍',
//            address:'北校区'
//          },
//          {
//            univer:'中山职业技术学院',
//            dormBuildings: '1号楼',
//            dormSupervisor:'张三',
//            dormQty:'20个宿舍',
//            address:'北校区'
//          },
//          {
//            univer:'中山职业技术学院',
//            dormBuildings: '1号楼',
//            dormSupervisor:'张三',
//            dormQty:'20个宿舍',
//            address:'北校区'
//          },
        ],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'学校',minWidth:'100',prop:'place.category.school.name'},
          {label:'宿舍楼',minWidth:'100',prop:'building.name'},
          {label:'宿管员',minWidth:'150',prop:'houseparent',formatter:this._houseparentFormatter},
          {label:'宿舍总数量',width:'120',prop:'dormitory_amount'},
          {label:'地点',minWidth:'100',prop:'place.address'},
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
        loading:false,
        universe:[],
        buildings:[],
        currentPage:3,
        school:'',
        formInline: {
          university: '',
          building:'all',
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
      _loadBuildingData(page){
        if(page==0){
            this.pageObj.currentPage=1;
        }
        this.loading=true;
        this.isFirst=false;
        let obj={
          schoolId:this.formInline.university,
          buildingId:this.formInline.building,
          page:page,
          size:this.pageObj.size
        }
        fetchAllBuildings(obj).then(response=>{
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
          this._loadBuildingData(0);
          this._loadDormBuilding(this.formInline.university);
        })
      },
      _loadDormBuilding(schoolId){
        fetchDormBuildings(schoolId).then(response=>{
          let data=response.data;
          this.buildings=[];
          this.buildings=this.buildings.concat(data);
        })
      },
      _houseparentFormatter(row,column,cellValue){
        let val=[];
        if(cellValue!=undefined&&cellValue.length!=0){
          cellValue.forEach(item=>{
            val.push(item.teacher.name);
          })
          let newVal=util.unique(val);
          return newVal.join('、');
        }
        else{
          return '';
        }
      },
      _univerChange(val){
        this._loadDormBuilding(val);
      },
      _change(val){
        this._loadBuildingData(val-1);
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

