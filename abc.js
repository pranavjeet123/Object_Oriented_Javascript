let diff = (arr1,arr2)=>{
    let itemDiff = arr1.toString().split("")
    .map((aItem,i)=>{
     
      let bItemArr = arr2.toString().split("");
      return aItem>bItemArr[i]? aItem-bItemArr[i]:bItemArr[i]-aItem;
    })
    .reduce((result,current)=>{
      return result+current
    },0);
    return itemDiff;
  }
  
  let resultData= arr1.map((aEle,aIndex)=>{
    return diff(aEle,arr2[aIndex]);
  }).reduce((result,current)=>{
    return result+current;
  },0)