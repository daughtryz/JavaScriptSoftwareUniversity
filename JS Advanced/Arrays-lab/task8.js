


    function solve1(array) {
        let first = 0;
        let second = 0;
    
        for (let i = 0; i < array.length; i++) {
            first += array[i][i];
            second += array[i][array.length - 1 - i];
        }
    
        console.log(`${first} ${second}`);
    }

    solve1([[20, 40],
        [10, 60]]);