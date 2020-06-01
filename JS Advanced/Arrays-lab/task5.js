

function solve(arr) {

    console.log(arr.filter((_,index) => index % 2 ===1).map(num => num *= 2).reverse().join(' '));
}

solve([3, 0, 10, 4, 7, 3]);