<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'universities'}">学校管理</router-link>&nbsp;&gt;&nbsp;管理
    </p>
    <div class="hm-title-bar">
      广东农工商职业技术学院
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'departAdd'}">
        <el-button type="primary">新增校区</el-button>
      </router-link>
    </div>
    <div class="el-main-table">
      <hm-table :column="column" :tableData="tableData" :operation="operation" @handleCurrentChange="_change" @handleClick="_handleClick"></hm-table>
    </div>
  </div>
</template>
<script>
  import hmTable from '../../components/hmTable.vue'
  export default{
    data(){
      return {
        tableData: [
          {
          name: '管理系',
          },
          {
            name: '财经系',
          },
          {
            name: '热作系',
          },
          {
            name: '机电系',
          },
          {
            name: '艺术系',
          },
          {
            name: '护苗系',
          },
          {
            name: '国际交流学院',
          }
        ],
        column:[
          {label:'ID',width:'120',type:'index'},
          {label:'校区名称',minWidth:'100',prop:'name'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'查看学院'},
            {name:'编辑'},
          ],
        },
      }
    },
    components:{
      hmTable:hmTable
    },
    methods:{
      _change(val){
        alert(val);
      },
      _jumpToIns(){
        this.$router.push({name:'univerInstitute'})
      },
      _edit(){
        alert(3333);
      },
      _handleClick(index){
        if(index==0){
          this._jumpToIns();
        }
        if(index==1){
          this._edit();
        }
      }
    }
  }
</script>
