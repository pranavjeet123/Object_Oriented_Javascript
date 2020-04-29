let sum = function (a){
    return function(b){
        if(b){
            return sum(a+b);

        }

        return a;
    }
}


//let sum = a=>b => b ? sum(a+b):a;

console.log(sum(2)(15)(30)(40)(60)());