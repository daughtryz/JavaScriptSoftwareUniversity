

function solve(arr,criteria) {

    return arr.sort(function(a,b) {
        if(criteria === 'asc') {
            return a - b;
        }

        return b - a;
    });
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));