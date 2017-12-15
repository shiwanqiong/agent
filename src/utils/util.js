/**
 * Created by qq on 2017/11/22 0022.
 */
//数组去重
var util={
  unique:function(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
      if(newArr.indexOf(arr[i])==-1){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}
export default util;
