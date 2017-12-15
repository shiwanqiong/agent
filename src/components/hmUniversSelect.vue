<template>
  <!--<el-form-item label="学校">-->
    <el-select placeholder="学校" v-model="universId">
      <el-option label="全部" value="all"></el-option>
      <el-option v-for="item in univers" :label="item.name" :value="item.id"></el-option>
    </el-select>
  <!--</el-form-item>-->
</template>
<script>
  import {fetchUnivers} from '../api/universities'
  export default{
      data(){
          return{
            univers:[],
            universId:''
          }
      },
      props:{
        value:String
      },
      created(){
        this._loadUnivers();
      },
      methods:{
        _loadUnivers(){
          fetchUnivers().then(response=>{
              let data=response.data;
              this.univers=this.univers.concat(data);
              this.universId=this.univers[0].id
          })
        }
      }
  }
</script>
