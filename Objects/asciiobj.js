let capsstring="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let capsArray = capsstring.split("");
let lowerArray = capsstring.toLowerCase().split("");
let allalphabetArray =[...capsArray,...lowerArray];
spaceObj={32:""};
mappedobj={};
 function objGenerator (arr,startingValue){
   count =startingValue;
   for(let i=0; i<arr.length;i++){
     
     mappedobj[count]=arr[i];
     count++;
   }

  
 
return mappedobj;
 
 }


let capsobj = objGenerator(capsArray,65);
let smallobj= objGenerator(lowerArray,97);

let finalObj= {...spaceObj,...capsobj,...smallobj};
console.log(finalObj);