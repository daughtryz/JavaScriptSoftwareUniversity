

function solve(number) {


    let isSame = false;
let sum = 0;
let counter = 0;
let initLastDigit = number%10;
    while(number) {
      
        sum += number % 10;
        
        
        number = Math.floor(number/10);
        counter++;
    }
    let result = counter * initLastDigit;
    if(result == sum) {
        isSame = true;
    }

console.log(isSame);
console.log(sum);
}


solve(2222222);