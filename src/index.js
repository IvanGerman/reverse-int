module.exports = function reverse (n) {
  n = n.toString();
  let arr = [];
  for ( let i = 0; i < n.length; i++ ) {
    arr.unshift(n[i]);
  };
  let result = arr.join('');
  return parseInt(result);
}
