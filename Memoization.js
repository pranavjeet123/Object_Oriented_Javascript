/**
 * Create a function 10 times which takes an argument n 
 * and multiplies n times 10, A simple multiplication function
 */

 const times10=(n)=>{
return n*10;
 }

console.log(times10(5));
 /**
  * Use an object to cache the result  of  times10 function.
  * tip 1: create a function that checks if the value of N is being calculated.
  * tip2: if the value for n is not calculated calculate and then save it in object
  */

  const cache ={};

  const memoTimes10 = (n)=>{

    
  }