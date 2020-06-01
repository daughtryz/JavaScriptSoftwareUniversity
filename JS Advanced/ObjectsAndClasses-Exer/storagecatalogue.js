
function solve(arr) {

    let data = new Map();

    for(let i = 0 ;i < arr.length;i++) {
        let line = arr[i].split(' : ');

        let productName = line[0];
        let productFirstLetter = productName.slice(0,1);
        let productPrice = Number(line[1]);

        if(!data.get(productFirstLetter)) {
            data.set(productFirstLetter,new Map());
        }
        
        data.get(productFirstLetter).set(productName,productPrice);
    }

    let sortedData = data.sort(function(a,b) {
        return a[0] - b[0];
    });
    for(let kvp of sortedData) {
        
        console.log(kvp[0]);
        for(let kp of kvp[1].sort((a,b) => a[1] - b[1])) {
            console.log(` ${kp[0]}: ${kp[1]}`)
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