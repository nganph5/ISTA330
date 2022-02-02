/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
  let res = new Array(input.length).fill(0);
  for (let i = 0; i < input.length; i++){
    for (let m of input){
      if (m > input[i] && m % 2 == 0){
        res[i] += 1
      }
    }
  }
  return res;
};