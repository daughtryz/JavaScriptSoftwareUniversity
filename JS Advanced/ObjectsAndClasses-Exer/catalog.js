

function solve(arr) {

    const data = {};
    for(let line of arr) {
        let productData = line.split(' : ');
        let productName = productData[0];
        let productPrice = Number(productData[1]);
        let firstLetterOfProduct = productName.slice(0,1);
        
        if(data.hasOwnProperty(firstLetterOfProduct) === false) {
            data[firstLetterOfProduct] = {};
        }
        data[firstLetterOfProduct][productName] = productPrice;
    }

    
    for(let key of Object.keys(data).sort()) {
        console.log(key);

        for(let kp of Object.keys(data[key]).sort()) {
            console.log(`${kp}: ${data[key][kp]}`)
        }
    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);