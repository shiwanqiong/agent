<style lang="scss" scoped>
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;<router-link :to="{name:'universities'}">学校管理</router-link>&nbsp;&gt;&nbsp;
      <router-link :to="{name:'univerCampus'}">管理</router-link>&nbsp;&gt;&nbsp;<router-link :to="{name:'univerInstitute'}">学院</router-link>&nbsp;&gt;&nbsp;
      <router-link :to="{name:'univerDepartment'}">系</router-link>&nbsp;&gt;&nbsp;专业
    </p>
    <div class="hm-btn-panel">
      <el-button size="mini" type="info" plain @click="_goBack">返回</el-button>
    </div>
    <div class="el-main-table">
      <el-table :data="tableData" stripe height="100%" style="width: 100%">
        <el-table-column type="index" label="ID" width="80" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="100" align="center"></el-table-column>
        <el-table-column prop="grade" label="年级" min-width="100" align="center"></el-table-column>
        <el-table-column label="操作" min-width="30" align="center">
          <template slot-scope="scope">
            <router-link :to="{name:'attendanceRecord'}">
              <el-button size="mini" type="success" icon="el-icon-edit-outline"></el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return {
            tableData: [{
              name: '虚拟班',
              grade:2017
            }
            ]
          }
      },
      methods:{
          _goBack(){
              this.$router.go(-1);
          }
      }
  }
</script>
