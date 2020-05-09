

function solve(arr) {
    
    let number = Number(arr[0]);
    for(let i =1;i < 6;i++) {
        if(arr[i] == 'chop') {
            number /= 2;
            console.log(number);

        } else if(arr[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
            
        } else if(arr[i] == 'spice') {
            number++;
            console.log(number);
        } else if(arr[i] == 'bake') {
            number *= 3;
            console.log(number);
        } else if(arr[i] == 'fillet') {
            number = number - (0.2*number);
            console.log(number);
        }
    }
        
    
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);