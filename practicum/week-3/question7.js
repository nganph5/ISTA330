/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
  res = new Array(M[0].length);
  for (let i = 0; i < res.length; i++){
    res[i] = [];
    for (let j = 0; j < M.length; j++){
      res[i].push(M[j][i]);
    }
  }
  return res;
};