<style lang="scss" scoped>
  .hm-login{
    min-height: 100vh;
    background-color: #454e59;
    padding-top:200px;
    transition: all .28s ease-out;
  }
  .hm-loginContainer{
    background-color: #ffffff;
    width:380px;
    margin:0 auto;
    padding:20px 0 0 0;
    transition: all .28s ease-out;
  }
  @media screen and (max-width: 768px){
    .hm-loginContainer{
      width:300px;
    }
    .hm-login{
      padding-top:100px;
    }
  }
  .hm-loginForm{
    width:90%;
    margin:0 auto;
    padding-bottom:5px;
  }
  .hm-login-logoICon{
    display: inline-block;
    width:35px;
    height:40px;
    background: url("../assets/images/hmLogo.png") no-repeat;
    background-size: 100%;
    margin-right:10px;
  }
  .hm-login-title h1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 30px;
    font-weight: 600;
    margin-bottom:30px;
  }
  .hm-login-tip{
    border-bottom:2px solid #E6E6E6;
    line-height: 38px;
    font-size: 14px;
    color:#454e59;
    margin-bottom:20px;
    padding-left:5%;
    font-weight: 600;
  }
  .hm-footnote{
    margin-top:20px;
    text-align: center;
    color:#999999;
    font-size: 12px;
    letter-spacing: 1px;
  }
</style>
<template>
  <div class="hm-login">
    <div class="hm-login-title">
      <h1>
        <span class="hm-login-logoICon">
        </span>
        Welcome
      </h1>
    </div>
    <div class="hm-loginContainer">
      <p class="hm-login-tip">Please Login</p>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="hm-loginForm">
        <el-form-item prop="name">
          <el-input type="text" v-model="ruleForm.name" placeholder="Your Username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" placeholder="Your Password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox label="Remember Me?" v-model="ruleForm.rememberMe"></el-checkbox>
          <el-button type="primary" @click="submitForm('ruleForm')" style="float: right">let's go</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p class="hm-footnote">2014-17©<a href="http://www.hm-keji.com" style="color:#FF8556">護苗2.7</a></p>
  </div>
</template>
<script>
  import {login} from '../api/login'
  import {setCookie,getCookie} from '../utils/cookie'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("Please provide your password"));
        } else {
//          if (this.ruleForm.pass !== '') {
//            this.$refs.ruleForm.validateField('pass');
//          }
          callback();
        }
      };
      var validateName=(rule, value, callback)=>{
        if (value === '') {
          callback(new Error("Please enter your account's username"));
        } else {
//          if (this.ruleForm.name !== '') {
//            this.$refs.ruleForm.validateField('name',function(){
//              alert('boom')
//            });
//          }
          callback();
        }
      }
      return {
        ruleForm: {
          name: getCookie('username')||'',
          pass: getCookie('pwd')||'',
          rememberMe:getCookie('rememberMe')||false
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    mounted(){
//      if(getCookie('username')){
//          this.ruleForm.name=getCookie('username');
//      }
//      if(getCookie('pwd')){
//        this.ruleForm.pass=getCookie('pwd');
//      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.ruleForm.rememberMe==true){
              setCookie('username',this.ruleForm.name);
              setCookie('pwd',this.ruleForm.pass);
              setCookie('rememberMe',this.ruleForm.rememberMe);
            }
            const params={
              login_username:this.ruleForm.name,
              login_password:this.ruleForm.pass,
              login_remember_me:this.ruleForm.rememberMe
            }
            login(params).then(response=>{
              let data=response.data;
              window.sessionStorage.setItem('token',data.token);
              if(this.ruleForm.rememberMe==true){
                if(!getCookie('username')){
                  setCookie('username',this.ruleForm.name);
                  setCookie('pwd',this.ruleForm.pass);
                }
              }
              this.$router.push({name:'index'})
            })
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
