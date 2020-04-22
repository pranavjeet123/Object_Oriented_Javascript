
function removeDuplicatefromString(x){
    return Array.from(new Set(x.split(''))).toString();
}