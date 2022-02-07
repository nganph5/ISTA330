/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
  let l = input.length, isIncreasing = true, isDecreasing = true;
  for (let i = 0; i < l - 1; i++){
    if (input[i] > input[i+1]){
      isIncreasing = false;
    }
    if (input[i] < input[i+1]){
      isDecreasing = false;
    }
  }
  return isIncreasing || isDecreasing;
};

