/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
  let setA = new Set(A), res = 0;
  for (let char of B){
    if (setA.has(char)){
      res += 1;
    }
  }
  return res;

};