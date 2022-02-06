/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let dict = {}
    for(let i=0; i < input.length; i = i + 1) {
        if (dict[input[i]]) {  // dict[1] = 1 | dict[2] = 1 | dict[2] = 1 + 1 = 2 | dict[3] = 1 | 
            dict[input[i]] = dict[input[i]] +  1; 
            if (dict[input[i]] > input.length/2){
                return input[i];
            }
        } else {
            dict[input[i]] = 1;
        }
    }
    return -1;
};