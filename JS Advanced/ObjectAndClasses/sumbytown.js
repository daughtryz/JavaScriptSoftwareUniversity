
function solve(arr) {


    const result = {};
    const finalResult = [];
    for(let i = 0;i<arr.length;i++) {
       
        let town = arr[i];
        let income = Number(arr[i+1]);
        if(i % 2 ===0) {
            if(result.hasOwnProperty(town)) {
                result[town] += Number(income);
            } else {
                result[town] = Number(income);
            }
            
        }
       
       
    }
   
    console.log(JSON.stringify(result));

    
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);