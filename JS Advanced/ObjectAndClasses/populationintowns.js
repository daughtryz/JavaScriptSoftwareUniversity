function solve(arr) {

    const result = {};
    for(let i = 0;i<arr.length;i++) {

        let line = arr[i].split(' <-> ');
        let town = line[0];
        let population = Number(line[1]);

        if(result.hasOwnProperty(town)) {
            result[town] += population;
        } else {
            result[town] = population;
        }

    }

    for(let key in result) {
        console.log(`${key} : ${result[key]}`);
    }

}


solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);