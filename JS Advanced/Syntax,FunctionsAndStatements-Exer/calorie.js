

function solve(arr) {

    const obj = {};


    for(let i =0;i<arr.length-1;i++) {

        if(i%2 == 0) {
           
            let product = arr[i];
            let quantity = Number(arr[i+1]);
            obj[product] = quantity;

        } 
     
            
        
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);