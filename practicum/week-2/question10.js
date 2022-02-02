/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  let arr = Array.from(String(n), Number);
  return Math.max(...arr) - Math.min(...arr); 
};
