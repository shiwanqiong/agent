/**
 * Created by qq on 2017/12/14 0014.
 */
import univerAssessList from './univerAssessList.json'
export function univerList(options){
  let params=JSON.parse(options.body);
  let page=params.page;
  let size=params.size;
  let dataList=univerAssessList.dataList;
  let amount=dataList.length;
  let arr=dataList.filter(function(item,index){
    return ((page*size-1)<index&&index<=((page+1)*size-1))
  })
  return {
    amount:amount,
    dataList:arr
  }
}
export function univerListSearch(options){
  let params=JSON.parse(options.body);
  let grade=params.grade;
  let area=params.area;
  let date=params.date;
  let agentName=params.agentName;
  let page=params.page;
  let size=params.size;
  let dataList=univerAssessList.dataList;
  let arr=[];

}
export function univerDetail(options){

}

