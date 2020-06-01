

function solve(arr) {

    var result = {};
for(let i = 0;i < arr.length;i++) {

    let line = arr[i].split(' => ');
    let juice = line[0];
    let quantity = Number(line[1]);
    if(result.hasOwnProperty(juice)) {
        result[juice] += quantity;
    } else {
        result[juice] = quantity;
    }

}

for(let key in result) {
    let res = Math.floor(result[key] / 1000);
    if(res > 1) {
        result[key] = res;
        console.log(`${key} => ${result[key]}`);
    }
    
}

}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);