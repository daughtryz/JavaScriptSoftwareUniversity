function solve(operator,...params) {
    return params.reduce((a,b) => eval(`${a}${operator}${b}`),params.shift())
    
}

console.log(solve("+",5,6));
