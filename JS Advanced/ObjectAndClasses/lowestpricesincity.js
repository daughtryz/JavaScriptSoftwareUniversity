

function solve(arr) {

    let data = new Map();
    
    for(let i =0;i<arr.length;i++) {
        let line = arr[i].split(' | ');
        let town = line[0];
        let product = line[1];
        let price = Number(line[2]);

        if(!data.get(product)) {
            data.set(product, new Map());
        }
        data.get(product).set(town,Number(price));
    }

    let result = "";

    for (const productWithPrice of data) {
        
        let lowestPrice = [...productWithPrice[1]].sort((a, b) => a[1] - b[1])[0]; // [a, [b, c]]
        result += `${productWithPrice[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
    }
    console.log(result.trim());
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);