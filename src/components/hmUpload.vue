<style scoped lang="scss">
  .hmUpload{
    display: inline-block;
  }
  .dialog-footer{
    text-align: center;
  }
</style>
<template>
  <div class="hmUpload">
    <el-button type="primary" @click="dialogFormVisible = true">{{buttonText}}</el-button>
    <el-dialog title="批量导入" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :before-close="beforeClose">
      <el-form :model="form">
        <el-form-item label="选择导入文件" :label-width="formLabelWidth">
          <!--<el-input v-model="form.name" auto-complete="off"></el-input>-->
          <!--:action="'http://192.168.0.159:19100'+url"  内网测试-->
          <!--:action="'http://39.108.151.85:19100'+url"  外网测试-->
          <el-upload
            class="upload-demo"
            ref="upload"
            :action="'/api'+url"
            :data="payLoad"
            :with-credentials="true"
            :file-list="fileList"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :auto-upload="false"
            :on-error="handleError"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <a :href="templateUrl" class="hm-a hm-text-color" style="margin-left:30px;" download>下载模板</a>
          </el-upload>
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-select v-model="form.university" placeholder="请选择学校" @change="_schoolChange">
            <el-option v-for="item in universe" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="isAddr">
          <el-form-item label="地点分类" :label-width="formLabelWidth">
            <el-select v-model="form.placeCategory" placeholder="请选择地点分类" @change="_categoryChange">
              <el-option v-for="item in placeCategory" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地点" :label-width="formLabelWidth">
            <el-select v-model="form.buildPlace" placeholder="请选择地点">
              <el-option v-for="item in buildingPlace" :label="item.address" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div v-if="isDate">
          <el-row>
            <el-col :xs="24" :sm="14" :md="14" :lg="14">
              <el-form-item label="学年" :label-width="formLabelWidth">
                <el-select v-model="form.schoolYear" placeholder="请选择学年" @change="_scheduleTypeChange">
                  <el-option :label="(nowYear-1)+'-'+nowYear" :value="(nowYear-1)+'-'+nowYear"></el-option>
                  <el-option :label="nowYear+'-'+(nowYear+1)" :value="nowYear+'-'+(nowYear+1)"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="10" :md="10" :lg="10">
              <el-form-item style="margin-left:30px;">
                <el-radio-group v-model="form.semester" @change="_scheduleTypeChange">
                  <el-radio label="Fall"  name="type">上学期</el-radio>
                  <el-radio label="Spring"  name="type">下学期</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-form-item label="日期" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  :readonly="hasSchedule"
                  placeholder="请选择开始日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label="总周期" :label-width="formLabelWidth">
                <el-input v-model="form.period" placeholder="总周期" :readonly="hasSchedule"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="submitUpload">提交</el-button>
      </div>
      <p>{{form.type}}</p>
    </el-dialog>
  </div>
</template>
<script>
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  import {checkSchedule} from '../api/courses'
  import {fetchBuildingPlace,fetchPlaceCategory} from '../api/dormitory'
  //  import time from
  export default{
    components: {ElContainer},
    data(){
      return {
        dialogFormVisible: false,
        form: {
          university: '',
          buildPlace:'',
          placeCategory:'',
          semester: 'Fall',
          schoolYear: '',
          date:new Date(),
          period:0
        },
        formLabelWidth: '120px',
        payLoad: {
          school_id: ''
        },
        buildingPlace:[],
        placeCategory:[],
        fileList: [],
        nowYear: (new Date()).getFullYear(),
        hasSchedule: false
      }
    },
    props: {
      dialogTitle: {
        type: String,
        default: '批量导入'
      },
      buttonText: {
        type: String,
        default: '批量导入'
      },
      universe: {
        type: Array,
        default: function () {
          return [];
        }
      },
      url: '',
      templateUrl:'',
      isDate: {
        type: Boolean,
        default: false
      },
      isAddr: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      submitUpload() {
        this.payLoad.school_id = this.form.university;
        if(this.isDate==true){
          this.payLoad.start_date=Date.parse(this.form.date);
          this.payLoad.period=this.form.period;
        }
        if(this.isAddr==true){
          this.payLoad.place_id=this.form.buildPlace;
        }
        this.$refs.upload.submit();
      },
      beforeClose(done){
        this._initFormValue();
        done();
      },
      closeModal(){
        this._initFormValue();
        this.dialogFormVisible = false;
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePreview(file) {
//        console.log(JSON.stringify(file));
      },
      handleSuccess(response, file, fileList){
        this.$message({
          message: '上传成功',
          type: 'success'
        });
        this._initFormValue();
        this.dialogFormVisible = false;
      },
      handleError(err, file, fileList){
        let message=JSON.parse(err.message);
        this.$message.error(message.data);
      },
//      beforeAvatarUpload(file){
//        let Xls = file.name.split('.');
//        if(Xls[1] === 'xls'||Xls[1] === 'xlsx'){
//          return file
//        }else {
//          this.$message.error('上传文件只能是 xls/xlsx 格式!')
//          return false
//        }
//      },
      _initFormValue(){
        this.form.university = '';
        this.form.buildPlace='';
        this.form.placeCategory='';
        this.form.semester= 'Fall';
        this.form.schoolYear= '';
        this.form.period=0;
        this.fileList = [];
      },
      _checkSchedule(){
        let obj = {
          schoolId: this.form.university,
          semesterType: this.form.semester,//Fall 秋季学期（上学期） Spring 冬季学期（下学期）
          schoolYear: this.form.schoolYear//2017-2018
        }
        checkSchedule(obj).then(response => {
          let data=response.data;
          let dataObj=data.data;
          if(dataObj==null){
            this.hasSchedule=false;
            this.form.date=new Date();
            this.form.period=0;
            return
          }
          else{
            this.form.date=dataObj.startTime;
            this.form.period=dataObj.period;
            this.hasSchedule=true;
          }
        })
      },
      _categoryChange(val){
        this.form.buildPlace='';
        this._fetchBuildPlace(val);
      },
      _fetchPlaceCategory(schoolId){
        fetchPlaceCategory(schoolId).then(response=>{
          let data=response.data;
          this.placeCategory=[];
          this.placeCategory=this.placeCategory.concat(data);
        })
      },
      _fetchBuildPlace(categoryId){
        fetchBuildingPlace(categoryId).then(response=>{
          let data=response.data;
          this.buildingPlace=[];
          this.buildingPlace=this.buildingPlace.concat(data);
        })
      },
      _scheduleTypeChange(val){
        if (this.form.university == '') {
          return;
        }
        this._checkSchedule();
      },
      _schoolChange(val){
        if(this.isAddr==true){
          this.form.placeCategory='';
          this._fetchPlaceCategory(val);
        }
        else{
          return;
        }
      },
    }
  }
</script>
