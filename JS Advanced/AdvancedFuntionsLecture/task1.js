

// function solution(num1) {
   
//     return function(num2) {
//         return num1 + num2;
//     }
// }

// let add5 = solution(5);
// console.log(add5(2));

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function solution(currencyFormatter) {

    return function (value) {
        return currencyFormatter(',','$',true,value);
    }

}