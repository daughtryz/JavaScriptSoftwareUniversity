


function solve(data) {
    function distance(x1, y1, x2, y2) {
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;
        return Math.sqrt(distanceX**2 + distanceY**2);
    }
    let x1 = data[0];
    let y1 = data[1];
    let x2 = data[2];
    let y2 = data[3]; 

    
    if(Number.isInteger(distance(x1,y1,0,0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(distance(x2,y2,0,0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

   if(Number.isInteger(distance(x1,y1,x2,y2))) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
   } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
   }

}

solve([2, 1, 1, 1]);