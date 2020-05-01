const items = [
    { id: 1, name: 'Super Burger', price: 50, spicy: true },
    { id: 2, name: 'French Fries', price: 30, spicy: false },
    { id: 1, name: 'Masala chai', price: 40, spicy: false }
];

const halfOfFries = items.map((item) => {

    if (item.id === 1) {
        return {
            ...item,
            price: item.price / 2
        };
    }
    return item;
});
console.log(halfOfFries);


/**
 * add all zero's at one side of array 
 * maintaining the order of other integers
 * output ======= [0, 0, 0, 0, 0, 0, 1, 3, 5, 6, 9, 12, 2, 7, 8];
 */

let arr =[0,1,3,5,6,0,0,0,0,0,9,12,2,7,8];
let zeroArray=[];
let intArray=[];
 arr.map((item)=>{
  if( item === 0){
    zeroArray.push(item); 
  }
  else{
    intArray.push(item);
  }
})

 let resultArray =[...zeroArray,...intArray]
 

console.log(resultArray);