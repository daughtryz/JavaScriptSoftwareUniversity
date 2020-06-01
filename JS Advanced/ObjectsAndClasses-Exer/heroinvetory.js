

function solve(arr) {

    const obj = [];

    for(let i =0;i<arr.length;i++) {

        let line = arr[i].split(' / ');
        let heroName = line[0];
        let heroLevel = Number(line[1]);
        let heroItems = [];

        if(line.length > 2) {
            heroItems = line[2].split(', ')
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        obj.push(hero);


    }

    console.log(JSON.stringify(obj));
}


solve(['Isacc / 25 / Apple',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);