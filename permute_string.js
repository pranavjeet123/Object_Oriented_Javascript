function swap(strArr, index1, index2) {
    var temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}


function permute(strArr, begin, end) {

    if (begin == end) {
        console.log(strArr);
    }

    else {
        for (var i = 0; i < strArr.length; i++) {
            swap(strArr, begin, i);
            permute(strArr, begin + 1, end);
            swap(strArr, begin, i);
        }
    }
}


function permutateString(strArr) {
    permute(strArr, 0, strArr.length - 1);
}


var strArr = "madam".split("");

permutateString(strArr);