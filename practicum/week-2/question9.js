/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function (input, shuffleIndices) {
    var dict = {};
    for (let i = 0; i < input.length; i = i + 1) {
      dict[shuffleIndices[i]] = input[i];
    }
    var res = "";
    for (let j = 0; j < shuffleIndices.length; j = j + 1) {
      res += dict[j];
    }
    return res;
  };