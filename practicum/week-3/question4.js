/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
    let dict = {}
    for(let i=0; i < input.length; i = i + 1) {
        if (dict[input[i]]) {  // dict[19] = 1, dict[1] = 1
            return true;
        } else {
            dict[input[i]] = 1;
        }
    }
    return false;
};