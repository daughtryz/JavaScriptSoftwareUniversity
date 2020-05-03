

function solve(radius) {
    var getTheType = typeof(radius);
    let result = 0.0;
    if(getTheType === 'number') {
         result = Math.PI * Math.pow(radius,2);
         console.log(result.toFixed(2));
    } else {
       console.log(`We can not calculate the circle area, because we receive a ${getTheType}.`); 
    }
    
    
}

    solve(5);