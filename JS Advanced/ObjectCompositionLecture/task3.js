
function solve(data) {

    const obj = {};
    const concatenate = (a1,o1) => ({...a1,...o1});
   
    let parsedData = JSON.parse(data);
    
   
    return parsedData.reduce(concatenate,{});
   
     

}

console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));