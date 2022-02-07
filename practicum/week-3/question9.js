/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
  let digitSums = {}, curSum = 0;
  for (let i = 1; i <= n; i++){
    curSum = sumDigit(i);
    if (curSum in digitSums){
      digitSums[curSum] += 1;
    }else{
      digitSums[curSum] = 1;
    }
  }
  let items = Object.values(digitSums);
  return items.filter(x => x == Math.max(...items)).length;
};

var sumDigit = function(num){
  res = 0;
  while (num > 0){
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return res;
}