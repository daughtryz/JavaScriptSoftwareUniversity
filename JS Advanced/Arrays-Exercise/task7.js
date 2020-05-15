

function solve(matrice) {

    let sumRow = matrice.map((col => col.reduce((a,b) => a + b)));

     let sumCol = matrice.reduce((r, a) => r.map((b, i) => a[i] + b));

     let allEqual = array => array.every( v => v === array[0]);

     return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));