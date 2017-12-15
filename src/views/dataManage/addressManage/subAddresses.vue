<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'addresses'}">地点管理</router-link>&nbsp;&gt;&nbsp;子地点
    </p>
    <div class="hm-btn-panel">
      <router-link :to="{name:'departAdd'}">
        <el-button type="primary">新增子地点</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick" :paging="false" :loading="loading"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../../components/hmTable.vue'
  import {fetchPlace} from '../../../api/addresses'
  export default{
    data(){
      return {
        tableData: [],
        column:[
          {label:'ID',width:'80',type:'index'},
          {label:'子地点',minWidth:'150',prop:'address'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'编辑'},
            {name:'删除'},
          ],
        },
        loading:true,
        cagegoryId:'',
        formInline: {
          university: '',
          className:'',
        }
      }
    },
    components:{
      hmTable:hmTable
    },
    created(){
      this.cagegoryId=this.$route.params.category_id;
      this._loadData(this.cagegoryId);
    },
    methods:{
      _loadData(cagegoryId){
        fetchPlace(cagegoryId).then(response=>{
            this.loading=false;
            let data=response.data;
            this.tableData=this.tableData.concat(data);
        })
      },
      _change(val){
        alert(val);
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

