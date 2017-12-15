<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <div class="hm-searchBar">
      <el-form :inline="true" label-width="60" :modle="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="学校">
              <el-select placeholder="学校" v-model="formInline.university" @change="_univerChange">
                <el-option v-for="item in univers" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item label="地点分类">
              <el-select placeholder="地点分类" v-model="formInline.category">
                <el-option label="全部" value="all"></el-option>
                <el-option v-for="item in addrCategory" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
            <el-form-item>
              <el-button type="primary" @click="_searchCategory">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'univerAdd'}">
        <el-button type="primary">新增地点</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import {fetchUnivers} from '../../../api/universities'
  import {fetchCategory} from '../../../api/addresses'
  export default{
    data(){
      return {
        tableData: [],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'地点分类',minWidth:'150',prop:'name'},
        ],
        operation:{
          label:'操作',
          width:'180',
          type:[
            {name:'编辑'},
            {name:'子地点'},
            {name:'删除'},
          ],
        },
        loading:true,
        univers:[],
        addrCategory:[],
        formInline: {
          university: '',
          category:'all',
        }
      }
    },
    components:{
      hmTable:hmTable
    },
    created(){
      this._loadUniversCategory();
    },
    methods:{
      _loadUniversCategory(){
        fetchUnivers().then(response=>{
          let data=response.data;
          this.univers=this.univers.concat(data);
          this.formInline.university=this.univers[0].id;
          this._loadCategory(this.formInline.university);
          this._loadData(this.formInline.university);
        })
      },
      _loadCategory(schoolId){
          fetchCategory(schoolId).then(response=>{
            let data=response.data;
            this.addrCategory=[];
            this.addrCategory=this.addrCategory.concat(data);
            this.formInline.category='';
          })
      },
      _loadData(schoolId){
        fetchCategory(schoolId).then(response=>{
          this.loading=false;
          let data=response.data;
          this.tableData=[];
          this.tableData=this.tableData.concat(data);
        })
      },
      _univerChange(val){
        this._loadCategory(val);
      },
      _searchCategory(){
        this.loading=true;
        let schoolId=this.formInline.university;
        let categoryId=this.formInline.category;
        fetchCategory(schoolId).then(response=>{
          this.loading=false;
          let data=response.data;
          this.tableData=[];
          if(categoryId=='all'||categoryId==''){
            this.tableData=this.tableData.concat(data);
          }
          else{
            this.tableData=data.filter(item=>{
                return item.id==categoryId
            })
          }
        })
      },
      _change(val){
        alert(val);
      },
      _edit(){
      },
      _delete(){
      },
      _jumpToPlace(categoryId){
        this.$router.push({name:'subAddresses',params:{category_id:categoryId}})
      },
      _handleClick(index,scope){
        if(index==0){
          this._edit();
        }
        if(index==1){
          this._jumpToPlace(scope.row.id);
        }
        if(index==2){
          this._delete();
        }
      }
    }
  }
</script>

