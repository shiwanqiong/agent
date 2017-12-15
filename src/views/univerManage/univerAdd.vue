<style>
  @media (max-width: 414px) {
    .el-form-item__content{
      margin-left:0 !important;
    }
  }
</style>
<style scoped>
  .el-main-form{
    padding:20px 20px 100px;
    background-color: #ffffff;
  }
  .el-form-panel{
    width:70%;
    margin: 0 auto;
    margin-top:100px;
    border:1px solid #ebebeb;
    padding-top:50px;
  }
  .el-form-panel form{
    width:70%;
    margin:0 auto;
  }
  @media (max-width: 768px) {
    .el-form-panel{
      width:90%;
    }
  }
</style>
<template>
  <div class="el-university">
    <p class="hm-crumbs">
      数据管理&nbsp;&gt;&nbsp;&nbsp;学校管理&nbsp;&gt;&nbsp;&nbsp;编辑学校&nbsp;&gt;
    </p>
    <div class="el-main-form">
      <div class="el-form-panel">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="学校名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="学校地址" prop="addr">
            <el-input v-model="ruleForm.addr"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="textarea">
            <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="ruleForm.textarea">
            </el-input>
          </el-form-item>
          <el-form-item class="el-btn-panel">
            <el-button type="success" size="small" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')" size="small" type="warning" plain>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return {
            ruleForm:{
              name:'',
              addr:'',
              textarea:''
            },
            rules:{
              name: [
                { required: true, message: '请输入学校名称', trigger: 'blur' },
              ],
              addr:[
                { required: true, message: '请输入学校地址', trigger: 'blur'}
              ]
            }
          }
      },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
