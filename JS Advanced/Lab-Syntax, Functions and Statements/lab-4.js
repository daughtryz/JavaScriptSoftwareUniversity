

function solve(...params) {
let number = 0;


    return `The largest number is ${params.sort((a,b) => a-b).pop()}`
}

console.log(solve(100,5,-3,16,30));