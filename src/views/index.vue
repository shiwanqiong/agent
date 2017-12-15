<style>
  .hm-pro-bar0 .el-progress-bar__inner {
    background-color: #FD736E;
  }
  
  .hm-pro-bar1 .el-progress-bar__inner {
    background-color: #F7980A;
  }
  
  .hm-pro-bar2 .el-progress-bar__inner {
    background-color: #6FCF86;
  }
  
  .hm-pro-bar3 .el-progress-bar__inner {
    background-color: #63B6EE;
  }
</style>

<style lang="scss" scoped>
  .hm-index {
    background-color: #F3F4F8 !important;
    height: 100%;
  }
  
  .hm-index-tip {
    display: flex;
    align-items: center;
  }
  
  .hm-index-title,
  .hm-index-tip {
    text-align: left;
    font-size: 16px;
    color: #999999;
    font-weight: 600;
    line-height: 36px;
  }
  
  .hm-bg-white {
    background-color: #fff;
  }
  
  .hm-mbt10 {
    margin-bottom: 10px;
  }
  
  .iconfont {
    font-size: 28px;
    margin-right: 5px;
  }
  
  .hm-data,
  hm-col-shadow {
    display: flex;
    background-color: #ffffff;
  }
  
  .hm-percent {
    background-color: #ffffff;
  }
  
  .hm-row-shadow,
  .hm-col-shadow {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
  }
  
  .hm-data {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
    padding: 24px 0 20px 50px;
  }
  
  .hm-data dl {
    flex: 1;
    padding-left: 80px;
    padding-top: 8px;
    text-align: left;
  }
  
  .hm-userImg {
    width: 86px;
    height: 86px;
  }
  
  .hm-userImg img {
    width: 100%;
  }
  
  .hm-data dt {
    font-size: 32px;
    line-height: 32px;
    color: #FF8556;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .hm-data dd {
    font-size: 18px;
    color: #424242;
    line-height: 18px;
  }
  
  .hm-percent {
    padding: 25px 0;
  }
  
  .hm-percent-qty {
    padding-left: 32px;
  }
  
  .hm-percent-today {
    padding-left: 5px;
  }
  
  .el-row {
    margin-top: 0 !important;
    margin-bottom: 20px;
  }
  
  .hm-univer-detail {
    background-color: #ffffff;
  }
  
  .hm-univer-detail h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 14px;
    color: #424242;
    border: 1px solid #EBEBEB;
  }
  
  .hm-univer-data {
    padding-top: 22px;
    padding-bottom: 37px;
  }
  
  .hm-univer-data p {
    line-height: 35px;
    font-size: 16px;
    color: #999999;
  }
  
  .hm-univer-logo {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 12px;
    vertical-align: middle;
  }
  
  .hm-univer-logo img {
    width: 100%;
  }
  
  .hm-per-icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
  }
  
  .hm-per-icon-0 {
    background-color: #FD736E;
  }
  
  .hm-per-icon-1 {
    background-color: #F7980A;
  }
  
  .hm-per-icon-2 {
    background-color: #6FCF86;
  }
  
  .hm-per-icon-3 {
    background-color: #63B6EE;
  }
  
  .hm-per-ctn {
    display: flex;
    /*height:140px;*/
  }
  
  .hm-per-subCtn {
    margin: 0px 10px 0;
  }
  
  .hm-per-subCtn-1 {
    flex: 1;
    padding-left: 20px;
  }
  
  .hm-per-subCtn p,
  .hm-per-subCtn-2 p {
    text-align: left;
    font-size: 14px;
    color: #424242;
    line-height: 36px;
  }
  
  .hm-per-subCtn-2 {
    width: 130px;
  }
  
  .hm-per-subCtn-2 p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hm-pro-bar {
    margin: 27px 0;
  }
  
  .hm-pro-bar:first-child {
    margin-top: 16px;
  }
  
  .hm-pro-ctn {
    width: 212px;
  }
  
  .hm-ringP {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hm-legend {
    margin-left: 30px;
  }
  
  
  /*.hm-pro-bar:last-child{*/
  
  
  /*margin-top:30px;*/
  
  
  /*}*/
  
  @media screen and (max-width: 1200px) {
    .hm-percent-today {
      padding-left: 32px;
    }
  }
  
  @media screen and (max-width: 992px) {
    .hm-univer [class*=el-col-] {
      margin-bottom: 10px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .hm-percent {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
    }
    [class*=el-col-] {
      margin-bottom: 10px;
    }
    .el-row {
      margin-bottom: 0;
    }
    .hm-row-shadow {
      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.10);
    }
    .hm-ringP {
      width: 160px;
    }
  }
  
  @media screen and (max-width: 414px) {
    .hm-pro-ctn {
      width: 160px;
    }
    .hm-percent {
      padding-left: 0;
    }
    .hm-per-subCtn-1 {
      padding-left: 0;
    }
  }
  
  @media screen and (max-width: 375px) {
    .hm-pro-ctn {
      width: 100px;
    }
    .hm-ringP {
      width: 100px;
    }
  }
  
  #total-annular {
    width: 810px;
    height: 300px;
    margin: 0 auto;
  }
  
  #new-annular {
    width: 810px;
    height: 300px;
    margin: 0 auto;
  }
  
  #map {
    width: 810px;
    height: 700px;
    margin: 0 auto;
  }
  
  #linebar {
    width: 810px;
    height: 700px;
    margin: 0 auto;
  }
</style>

<template>
  <div class="hm-index">
    <section>
      <p class="hm-index-tip"><i class="iconfont hm-icon-data"></i>统计概况</p>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="hm-data">
            <div class="hm-userImg">
              <img src="../assets/images/hmUserImg.png" alt="">
            </div>
            <dl>
              <dt>53</dt>
              <dd>累计代理商</dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="hm-data">
            <div class="hm-userImg">
              <img src="../assets/images/hmUserAdd.png" alt="">
            </div>
            <dl>
              <dt>6</dt>
              <dd>今日新增</dd>
            </dl>
          </div>
        </el-col>
      </el-row>
    </section>
    <section>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div id="total-annular" ref="totalAnnular"></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div id="new-annular" ref="newAnnular"></div>
        </el-col>
      </el-row>
    </section>
    <section>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div id="linebar" ref="linebar"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div id="map" ref="map"></div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  import '../../node_modules/echarts/map/js/china'
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(function() {
        this._drawTotalAnnular();
        this._drawNewAnnular();
        this._drawBar();
        this._drawMap();
      })
    },
    methods: {
      _drawTotalAnnular() {
        let annular = this.$echarts.init(this.$refs.totalAnnular);
        let option = {
          title: {
            text: '累计代理商占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['三级代理商', '二级代理商', '一级代理商']
          },
          series: [{
            name: '累计占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                value: 66,
                name: '三级代理商'
              },
              {
                value: 17,
                name: '二级代理商'
              },
              {
                value: 17,
                name: '一级代理商'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        };
        annular.setOption(option);
      },
      _drawNewAnnular() {
        let annular = this.$echarts.init(this.$refs.newAnnular);
        let option = {
          title: {
            text: '今日新增占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['三级代理商', '二级代理商', '一级代理商']
          },
          series: [{
            name: '新增占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 60,
                name: '三级代理商'
              },
              {
                value: 20,
                name: '二级代理商'
              },
              {
                value: 20,
                name: '一级代理商'
              }
            ]
          }]
        };
        annular.setOption(option);
      },
      _drawBar() {
        let annular = this.$echarts.init(this.$refs.linebar);
        let option = {
          title: {
            text: '代理商分布',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          // legend: {
          //   data: ['2011年', '2012年']
          // },
          grid: {
            show: false,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            show: false,
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            show: true,
            type: 'category',
            inverse: true,
            axisTick: {
              show: true,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#eeeeee',
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            data: ['广东省', '浙江省', '福建省', '湖南省', '广西省', '陕西省']
          },
          series: [{
            name: '代理商分数量',
            type: 'bar',
            data: [15,12,10,7,6,3]
          }]
        };
        annular.setOption(option);
      },
      _drawMap() {
        let annular = this.$echarts.init(this.$refs.map);
        let option = {
          backgroundColor: "#eeeee",
          title: {
            text: '',
            subtext: '',
            x: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['aaa', 'bbb', 'CCC']
          },
          dataRange: {
            min: 0,
            max: 15,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
              'china': true
            }
          },
          series: [{
            name: '代理商',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            data: [
  
              {
                name: '广东',
                value: 15
              },
              {
                name: '浙江',
                value: 12
              },
              {
                name: '福建',
                value: 10
              },
              {
                name: '湖南',
                value: 7
              },
              {
                name: '广西',
                value: 6
              },
              {
                name: '陕西',
                value: 3
              }
            ]
          }]
        };
        annular.setOption(option);
      }
    }
  }
</script>

