

function solve(arr) {
    let sum = arr.reduce((a,b) => a+b,0);
    let sumDividedByOne = arr.reduce((a,b) => (1/(a+b)),0);
    let concated = arr.reduce((a,b) => a+''+b);

    console.log(sum);
    console.log(sumDividedByOne);
    console.log(concated);
}


solve([2, 4, 8, 16]);