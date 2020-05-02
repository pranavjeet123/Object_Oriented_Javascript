
/**
 * Find total number of increments and decrements required
 *for 2 arrays to be same.
 */



let arr1 = [123, 931];
let arr2 = [821, 111];

let count = 0;
function counter(a, b) {
    while (a < b) {
        count++;
        a++;
    } while (a > b) {
        count++
        a--;

    }
    if (a === b) {
        count = 0;
    }
    return count;
}

let sum = 0;
arr1.forEach((item) => {

    let pos = arr1.indexOf(item);
    let anotherItem = arr2[pos].toString().split("");
    let aa = item.toString().split("");
    for (let i = 0; i < aa.length; i++) {
        sum = sum + counter(aa[i], anotherItem[i]);
    }
}
)
console.log(sum);










