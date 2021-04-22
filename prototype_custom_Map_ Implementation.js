Array.prototype.pranavMap = function(cb){
    let returnedArray = [];
    for(let item of this){
      returnedArray.push(cb(item));
    }
    return returnedArray;
  }
  
  let array1 = [2,3,4,5,6];
  
  let mappedArray = array1.pranavMap((item)=>item*2);
  
  console.log(mappedArray);