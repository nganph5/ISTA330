/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let res = new Array(n);
  for (let i = 0; i < n; i++){
    res[i] = [1];
    for (let j = 1; j < i; j++){
      res[i].push(res[i-1][j-1] + res[i-1][j]);
    }
    if (i > 0){
      res[i].push(1);
    }
  }
  return res;
};