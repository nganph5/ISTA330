
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        let max_so_far = input[0];
        let curr_max = input[0];
       
        for (let i = 1; i < input.length; i = i + 1) {
            curr_max = Math.max(input[i], curr_max+input[i]);
            max_so_far = Math.max(max_so_far, curr_max);
        }
       
      return max_so_far;
    
 };
/*
       input: [-12,3,-1,5,-2,1,-7]      
       max_so_far = 7
       current_max = 6

i=1, 3 or 3 + -12 => 3
i=2, -1 or 3 - 1 => 2
i=3, 2 or 2 + 5 => 7
i=4, 7 or 7-2 = 5=> 7
i=5, 1 or 6 => 6
i=6, -1 or 6-7 => -1

*/