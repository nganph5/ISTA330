/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output:[[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    input.sort(function(a, b){return a - b});
    console.log(input);
    let minNum = 100000000;
    for (i = 0; i < input.length-1; i = i + 1) {
        let x = Math.abs(input[i]-input[i+1]);
        minNum = Math.min(minNum, x);
    }
    // minNum = 1;
    var new_Array = []; 
    for (i = 0; i < input.length-1; i = i + 1) {
        if ((input[i+1] - input[i]) == minNum) {
            new_Array.push([input[i],input[i+1]]);
        }
    }
    return new_Array;
}
// input = [-14,-10,-4,-4,1,19,23,24]
// minus = [4,5,1,5,18,4,1]