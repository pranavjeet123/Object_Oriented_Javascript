function balanced (pattern){

}

balanced('{({{[]}})}');//console.log("true");
balanced('{({{[]})}');//console.log("false");
balanced('{({{[]}})}]');//console.log("false");
balanced('{({{[ ]}})}');//console.log("true");