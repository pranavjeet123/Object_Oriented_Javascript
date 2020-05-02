
/**
 * Find total number of increments and decrements required
 *for 2 arrays to be same.
 */



let arr1=[123,921,5681];
let arr2=[821,111,9991];

let diff = (a,b)=>{
  let itemDiff = a.toString().split("")
  .map((aItem,i)=>{
   
    let bItemArr = b.toString().split("");
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

console.log(resultData);










