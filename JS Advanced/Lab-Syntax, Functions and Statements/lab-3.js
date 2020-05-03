

function solve(min,max) {

    let sum = 0;

    for(let i = min;i <= max;i++) {
        sum += Number(i);
    }
    return sum;
}

console.log(solve(2,4));