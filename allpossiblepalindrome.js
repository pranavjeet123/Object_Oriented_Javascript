let string ="maadaam"

function combine(str) {
  const ret = [];
 
  (function doCombine(prefix, restOfStr) {
    for (let i = 0; i < restOfStr.length; i++) {
      const newPrefix = prefix + restOfStr[i];
      ret.push(newPrefix);
      doCombine(newPrefix, restOfStr.slice(i + 1));
    }
  })('', str);
 
  return ret;
}

String.prototype.reverse = function () {
  let ret = '';
 
  for (let i = this.length - 1; i >= 0; i--) {
    ret += this[i];
  }
 
  return ret;
}

console.log(combine(string).filter(string => string === string.reverse()))