/**
 * Created by qq on 2017/12/14 0014.
 */
import {univerList} from './data/subagentManage/subagentManageData'
const Mock=require('mockjs')
Mock.mock('/agent/univerAssesslist','post',univerList)
