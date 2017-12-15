<style>
  table{
    width:100%!important;
  }
</style>
<template>
  <div>
    <el-table :data="tableData" stripe style="width:100%;" v-loading="loading">
      <el-table-column type="selection" width="55" v-if="checkbox"></el-table-column>
      <el-table-column v-for="item in column" :prop="item.prop" :type="item.type" :min-width="item.minWidth" :formatter="item.formatter"  :label="item.label" :width="item.width" align="center"></el-table-column>
      <el-table-column v-if="operation.label" :label="operation.label" :width="operation.width?operation.width:160" align="center">
        <template slot-scope="scope">
          <a class="hm-a" v-for="(item,index) in operation.type" @click="handleClick(index,scope)">{{item.name}}</a>
        </template>
      </el-table-column>
    </el-table>
    <div class="hm-pageBar" v-if="paging==true">
      <!--:current-page.sync="currentPage"-->
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="pageObj.size"
        :current-page.sync="pageObj.currentPage"
        layout="total,prev, pager, next,jumper"
        :total="pageObj.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      }
    },
    props:{
      column:{
        type:Array,//arr[i]={label:'',width:'',align:'',prop:''}
        default:[]
      },
      tableData:{
        type:Array,//
        default:[]
      },
      operation:{
        type:Object,
        default: function () {
          return {}
        }
      },
      paging:{
        type:Boolean,
        default:true
      },
      pageObj:{
        type:Object,
        default: function () {
          return { size:10,total:0,currentPage:0}
        }
      },
      loading:{
        type:Boolean,
        default:false
      },
      checkbox:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      handleCurrentChange(val){
        this.$emit('handleCurrentChange',val);
      },
      handleClick(index,scope){
        this.$emit('handleClick',index,scope);
      }
    }

  }
</script>
