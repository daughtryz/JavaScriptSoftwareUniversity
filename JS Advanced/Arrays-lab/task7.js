

function solve(arr) {
let allBiggestNumbers = [];
    for(let i = 0;i < arr.length;i++) {
        var currentSequenceBiggestNumber = arr[i].sort((a,b) => b-a).slice(0,1);

        allBiggestNumbers.push(currentSequenceBiggestNumber);
    }

    let biggestNumber = allBiggestNumbers.sort((a,b) => b-a).slice(0,1);
    console.log(biggestNumber.join(' '));
}

solve([[20, 50, 10],
    [8, 33, 145]]);

