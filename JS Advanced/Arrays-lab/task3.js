

function solve(arr) {

    const allNegativeNumbersSorted = arr.filter((num) => num < 0).sort((a,b) => b - a);
    const allPositiveNumbers = arr.filter((num) => num >= 0);
    console.log(allNegativeNumbersSorted.concat(allPositiveNumbers).join('\n'));
}

solve([7, -2, 8, 9]);


function solve1(arr) {

    const result = [];
    arr.forEach(element => {
        element < 0 ?
            result.unshift(element) :
            result.push(element)
    });

    console.log(result.join("\n"));
}