

function solve(arr) {

    const longestSubsequence = [];

    let biggest = arr[0];
    
    for(let i = 0;i < arr.length;i++) {

       if(arr[i] >= biggest) {
        longestSubsequence.push(arr[i]);
        biggest = arr[i];
       }
    }

console.log(longestSubsequence.join('\n'));

}


solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);