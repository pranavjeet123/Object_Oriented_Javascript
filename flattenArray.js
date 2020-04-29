var givenArray = [1,2,[3,4,[5,6,7],8],9,10];

const flattenDeep = x =>Array.isArray(x)?[].concat(...x.map(flattenDeep)):x

console.log(flattenDeep(givenArray));