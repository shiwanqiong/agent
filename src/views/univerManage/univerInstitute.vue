<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'universities'}">学校管理</router-link>&nbsp;&gt;&nbsp;<router-link :to="{name:'univerCampus'}">管理</router-link>&nbsp;&gt;&nbsp;学院
    </p>
    <div class="hm-title-bar">
      广东农工商职业技术学院
    </div>
    <div class="hm-btn-panel">
      <router-link :to="{name:'departAdd'}">
        <el-button type="primary">新增学院</el-button>
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
            name: '管理学院',
          },
          {
            name: '财经学院',
          },
          {
            name: '艺术学院',
          },
          {
            name: '国际交流学院',
          }
        ],
        column:[
          {label:'ID',width:'120',type:'index'},
          {label:'学院名称',minWidth:'100',prop:'name'},
        ],
        operation:{
          label:'操作',
          type:[
            {name:'查看系'},
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
      _jumpToDepart(){
        this.$router.push({name:'univerDepartment'})
      },
      _edit(){
        alert(3333);
      },
      _handleClick(index){
        if(index==0){
          this._jumpToDepart();
        }
        if(index==1){
          this._edit();
        }
      }
    }
  }
</script>
