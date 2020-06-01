

function solve(arr) {

 const result = arr
    .map(num => Number(num))
 .filter((_,index ) => index % 2 === 0  
    );

    console.log(result.join(' '));

}

solve(['5', '10']);

//solve1(['5', '10']);
//solve2(['JS','3']);


   