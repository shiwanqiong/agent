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
    
    .textL {
        text-align: left;
    }
    
    .textR {
        text-align: right;
    }
    
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
    
    #brokenLine {
        // width: 100%;
        height: 500px;
    }
    
    #bar {
        height: 500px;
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
                            <img src="../../assets/images/hmUserImg.png" alt="">
                        </div>
                        <dl>
                            <dt>6000</dt>
                            <dd>累计用户</dd>
                        </dl>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="hm-data">
                        <div class="hm-userImg">
                            <img src="../../assets/images/hmUserAdd.png" alt="">
                        </div>
                        <dl>
                            <dt>10</dt>
                            <dd>今日新增</dd>
                        </dl>
                    </div>
                </el-col>
            </el-row>
        </section>
        <section class="hm-bg-white">
            <el-row class="choosed">
                <el-col :xs="24" :sm="24" :md="24" :lg="14" class="textL">
                    <el-select v-model="allAgent">
                        <el-option v-for="item in agent" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="10" class="textR">
                    <!-- <el-date-picker @change="_chooseTime" v-show="formInline.dateRange=='自定义'" v-model="formInline.chooseTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                    </el-date-picker> -->
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                                            {{dateRange}}<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="最近7天">最近7天</el-dropdown-item>
                            <el-dropdown-item command="今天">今天</el-dropdown-item>
                            <el-dropdown-item command="最近30天">最近30天</el-dropdown-item>
                            <el-dropdown-item command="自定义">自定义</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
            <el-row :span="24">
                <div id="brokenLine" ref="brokenLine"></div>
            </el-row>
            <el-row :span="24">
                <div id="bar" ref="bar"></div>
            </el-row>
        </section>
    </div>
</template>

<script>
    import moment from 'moment'
    
    export default {
        data() {
            return {
                agent: [{
                        name: "全部代理商",
                        id: 1
                    },
                    {
                        name: "一级代理商",
                        id: 2
                    },
                    {
                        name: "二级代理商",
                        id: 3
                    },
                    {
                        name: "三级代理商",
                        id: 4
                    }
                ],
                allAgent: '',
                dateRange: '最近7天',
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.allAgent = this.agent[0].name;
                this._drawBrokenLine();
                this._drawBar();
            })
        },
        methods: {
            handleCommand(command) {
                this.dateRange = command;
            },
            _drawBrokenLine() {
                let annular = this.$echarts.init(this.$refs.brokenLine);
                let option = {
                    title: {
                        text: `${moment((new Date()).getTime()-24*60*60*1000*7).format('MM月DD日')} - ${moment((new Date()).getTime()-24*60*60*1000).format('MM月DD日')}`,
                        x: 'center'
                    },
                    backgroundColor: '#ffffff',
                    name: 'a',
                    tooltip: {
                        trigger: 'axis', //按x轴显示
                        show: true,
                        axisPointer: {
                            lineStyle: {
                                color: 'none', //不显示线条
                            },
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        textStyle: {
                            align: 'left',
                            fontSize: 12,
                            color: '#333333',
                        },
                        extraCssText: 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)' //添加阴影
                    },
                    color: ['#0580f2', '#faa732'],
                    grid: {
                        left: '5%',
                        right: '6%',
                        top: '14%',
                        bottom: '6%',
                        containLabel: true
                    },
                    legend: {
                        show: true,
                        icon: 'circle',
                        right: 20,
                        textStyle: {
                            fontSize: 12,
                            color: '#333333'
                        },
                        data: ['累计用户', '新增用户']
                    },
                    xAxis: {
                        show: true,
                        type: 'category',
                        axisTick: {
                            show: false
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
                                color: '#999999'
                            }
                        },
                        data: [
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 7).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 6).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 5).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 4).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 3).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000 * 2).format('YYYY-MM-DD'),
                            moment((new Date()).getTime() - 24 * 60 * 60 * 1000).format('YYYY-MM-DD'),
                        ]
                    },
                    yAxis: {
                        show: true,
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#f2f3f7'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 12,
                                color: '#999999'
                            }
                        }
                    },
                    series: [{
                        name: '累计用户',
                        type: 'line',
                        symbol: 'circle',
                        itemStyle: {
                            emphasis: {
                                symbol: 'circle',
                            }
                        },
                        symbolSize: [8, 8],
                        data: [70, 81, 80, 93, 88, 85, 100]
                    }, {
                        name: '新增用户',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: [8, 8],
                        data: [50, 62, 64, 78, 63, 64, 80]
                    }]
                };
                annular.setOption(option);
            },
            _drawBar() {
                let annular = this.$echarts.init(this.$refs.bar);
                let option = {
                    title: {
                        text: '学校用户前10',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        data: ['广东农工商', '财经系', '新闻系', '法学院', '经济学院', '英语系', '土木工程系', '计算机系', '金融学', '心理学'],
                        boundaryGap: ['20%', '20%'],
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            rotate: 45,
                            textStyle: {
                                color: '#333',
                                fontSize: 14,
                            }
                        }
                    }],
                    yAxis: [{
                        show: false,
                        type: 'value',
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
                    }],
                    series: [{
                        name: '用户量',
                        type: 'bar',
                        data: [100, 99, 96, 94, 91, 90, 89, 87, 83, 80],
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        }
                    }]
                };
                annular.setOption(option);
            }
        }
    }
</script>

