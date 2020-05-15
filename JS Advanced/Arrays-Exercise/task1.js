
function solve(arr) {

    let separator = arr[arr.length-1];
    const result = arr.slice(0,arr.length-1).join(separator);

    return result;
}


console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']))