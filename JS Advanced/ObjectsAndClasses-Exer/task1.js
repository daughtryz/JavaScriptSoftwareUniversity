
function solve(arr) {

    let obj = {};
    let arrResult = [];
    for(let i = 0;i<arr.length;i++) {

        let args = arr[i].split(" / ");
        let heroName = args[0];
        let heroAge = Number(args[1]);
        let heroItems = new Array();
        if(args.length > 2) {
             heroItems = args[2].split(", ");
        }
        
        let hero = {
            name: heroName,
            level: heroAge,
            items: heroItems
        };
       
        arrResult.push(hero);
    }

    console.log(JSON.stringify(arrResult));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);