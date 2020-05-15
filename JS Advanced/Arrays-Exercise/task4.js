

function solve(arr) {

    let numberOfReversions = arr[arr.length-1];
 
    arr = arr.slice(0,arr.length-1);

    for(let i = 0;i < numberOfReversions;i++) {
        
        arr.unshift(arr.pop());
    }
    

    console.log(arr.join(' '));

}


solve(['1', 
'2', 
'3', 
'4', 
'2']);