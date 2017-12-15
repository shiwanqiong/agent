<style lang="scss" scoped>
  .el-container.is-vertical{
    min-height: 100vh;
  }
  .el-header{
    height: 80px !important;
    padding:0!important;
    background-color:#F8F8F8;
    text-align: center;
    /*display: flex;*/
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    text-align: center;
    background-color:#ffffff;
    padding:0;
    /*padding:20px 30px 0 !important;*/
  }
  .el-main>div{
    padding:20px 30px 0 !important;
  }
  .el-aside-cus ul{
    height:100%;
  }
  .el-aside-cus,.hm-logo{
    transition: all .28s ease-out;
  }
  .hm-logo{
    display: flex;
    height:80px;
    background-color: #424242;
    padding:20px;
    float: left;
  }
  .hm-logo dt{
    margin-top:5px;
    font-size: 16px;
    color: #63B6EE;
    margin-bottom:8px;
  }
  .hm-logo dd{
    font-size: 12px;
    color: #FFFFFF;
  }
  .hm-logoIcon{
    width:40px;
    height:45px;
    margin-right:10px;
  }
  .hm-logoIcon img{
    width:100%;
  }
  .hm-user{
    padding-right:50px;
    height:100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #B3B3B3;
    margin-left:219px;
    transition: all .28s ease-out;
  }
  .navShow.el-aside-cus{
    width:220px !important;
    display: block;
  }
  /*.hm-logo{*/
    /*width:80px;*/
  /*}*/
  .navShow.hm-logo dl,.navShow.hm-logo>div{
    display: block;
  }
  .hm-userIcon{
    display:inline-block;
    width:26px;
    height:26px;
    background:url("../assets/images/hmUserIcon.png") no-repeat;
    background-size: 100%;
    margin-right:10px;
  }
  .hm-asideTitle{
    font-size: 14px;
  }
  @media (min-width: 768px) {
    .el-aside-cus{
      width:220px !important;
      display: block;
    }
    .hm-logo dl,.hm-logo>div{
      display: block;
    }
    .hm-logo{
      width:219px;
    }
  }
  @media (max-width: 768px) {
    .el-aside-cus{
      width:0px !important;
    }
    .hm-logo{
      width:0px;
      padding:0;
    }
    .hm-user{
      margin-left:0px;
    }
    .hm-logo dl,.hm-logo>div{
       display: none;
     }
    .el-main>div{
      padding: 0 10px!important;
    }
    .navShow.el-aside-cus{
      width:220px !important;
    }
    .navShow.hm-logo{
      width:219px;
      padding:20px;
    }
    .navShow.hm-logo dl,.navShow.hm-logo>div{
      display: block;
    }
    .hm-icon-showToggle{
      display: block !important;
    }
  }
  .el-dropdown{
    flex: 1;
    cursor: pointer;
    text-align: right;
  }
  .hm-icon-showToggle{
    margin-left:30px;
    font-size: 36px;
    cursor: pointer;
    display: none;
    transition: all .28s ease-out;
  }
</style>
<template>
  <el-container>
    <el-header>
      <div class="hm-logo" :class="{navShow:isNavShow}">
        <div class="hm-logoIcon">
          <img src="../assets/images/hmLogo.png" alt="护苗科技">
        </div>
        <dl>
          <dt>校园易</dt>
          <dd>管理后台</dd>
        </dl>
      </div>
      <div class="hm-user">
          <span class="iconfont hm-icon-showToggle" @click="_toggleShow"></span>
        <el-dropdown @command="_handleCommand">
          <!--<span class="el-dropdown-link">-->
            <!--下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--</span>-->
          <span class="el-dropdown-link"><i class="hm-userIcon"></i>张晓峰</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="220px" class="el-aside-cus" :class="{navShow:isNavShow}">
        <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :default-openeds="defaultOpeneds" background-color="#424242" text-color="#ccc" active-text-color="#63B6EE" :router=true>
          <el-menu-item index="/index">
            <i class="iconfont hm-icon-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont hm-icon-data"></i>
              <span slot="title" class="hm-asideTitle">子代理商管理</span>
            </template>
            <el-menu-item index="/subagents">
              <span slot="title">代理商管理</span>
            </el-menu-item>
            <el-menu-item index="/subagentAssessing">
              <span slot="title">代理商审批</span>
            </el-menu-item>
            <el-menu-item index="/universityAssessing">
              <span slot="title">学校审批</span>
            </el-menu-item>
            <!--<el-menu-item index="/universities">-->
              <!--<span slot="title">学校管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/students">-->
              <!--<span slot="title">学生管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/teachers">-->
              <!--<span slot="title">教师管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/counsellor">-->
              <!--<span slot="title">辅导员管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/courses">-->
              <!--<span slot="title">课程管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/classes">-->
              <!--<span slot="title">课节管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/addresses">-->
              <!--<span slot="title">地点管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/dormitorys">-->
              <!--<span slot="title">宿舍管理</span>-->
            <!--</el-menu-item>-->
          </el-submenu>
          <!--<el-submenu index="2">-->
            <!--<template slot="title">-->
              <!--<i class="iconfont hm-icon-setting"></i>-->
              <!--<span slot="title" class="hm-asideTitle">系统设置</span>-->
            <!--</template>-->
            <!--<el-menu-item index="/configuration">-->
              <!--<span slot="title">学校配置</span>-->
            <!--</el-menu-item>-->
          <!--</el-submenu>-->
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont hm-icon-setting"></i>
              <span slot="title" class="hm-asideTitle">学校管理</span>
            </template>
            <el-menu-item index="/universityInfo">
              <span slot="title">学校信息</span>
            </el-menu-item>
            <el-menu-item index="1">
              <span slot="title" >功能管理</span>
            </el-menu-item>
            <!--<el-menu-item index="/dataList">-->
            <!--<span slot="title">数据管理</span>-->
            <!--</el-menu-item>-->
            <el-menu-item index="3">
            <span slot="title">学校配置</span>
            </el-menu-item>
            <el-menu-item index="/universityRecord">
              <span slot="title">学校报备</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont hm-icon-setting"></i>
              <span slot="title" class="hm-asideTitle">报表统计</span>
            </template>
            <el-menu-item index="/configuration">
              <span slot="title">用户统计</span>
            </el-menu-item>
            <el-menu-item index="/accounts">
              <span slot="title">代理商统计</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/index">
            <i class="iconfont hm-icon-home"></i>
            <span slot="title">分红中心</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont hm-icon-setting"></i>
              <span slot="title" class="hm-asideTitle">系统管理</span>
            </template>
            <el-menu-item index="/configuration">
              <span slot="title">账号管理</span>
            </el-menu-item>
            <el-menu-item index="/accounts">
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="/accounts">
              <span slot="title">操作日志</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'app',
    data(){
      return{
        defaultOpeneds:[
//          'universities',
//          '3','4','5','6','7','8','9','10','11','12'
          '1','2'
        ],
        isNavShow:false,
        defaultActive:'/'+this.$route.path.split('/')[1]
      }
    },
    mounted(){
      console.log(this.$route);
    },
    methods:{
      _toggleShow(){
        this.isNavShow=!this.isNavShow;
      },
      _handleCommand(command){
        if(command=='logOut'){
          window.sessionStorage.removeItem('token');
          this.$router.replace({name:'login'})
        }
      }
    },
    watch:{
      $route: {
        handler: function (to, from) {
          let fullPath=to.fullPath;
          this.defaultActive='/'+fullPath.split('/')[1];
        },
        deep: true
      },
    }
  }
</script>
