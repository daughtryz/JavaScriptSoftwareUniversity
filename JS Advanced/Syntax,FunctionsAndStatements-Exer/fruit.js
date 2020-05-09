
function solve(fruit,weightInGrams,price) {
    let kilograms = (weightInGrams/1000);
    let neededMoney = kilograms*price;


    return `I need $${neededMoney.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange',2500,1.80));