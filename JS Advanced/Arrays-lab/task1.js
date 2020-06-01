

function solve(arr) {
    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length-1]);

    let sum = firstEl + lastEl;

    return sum;

}

console.log(solve(['20', '30', '40']));