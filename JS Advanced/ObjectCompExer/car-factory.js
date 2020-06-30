

function solve(obj) {

    let model = obj.model;
    let power = 0;
    let volume = 0;
    if(obj.power <= 90) {
        power = 90;
        volume = 1800;
    } else if(obj.power > 90 && obj.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }
    
    let engine = {
        power,
        volume
    };
    let carriage = {
        type: obj.carriage,
        color: obj.color
    };
    let oddNumber = 0;
    if(obj.wheelsize % 2 === 0) {
        oddNumber = 2 * Math.floor(obj.wheelsize/2)-1;
    } else {
        oddNumber = obj.wheelsize;
    }
     

    let wheels = [];

    for(let i = 0;i < 4;i++) {
        wheels.push(oddNumber);
    }

    return {
        model,
        engine,
        carriage,
        wheels
    };
}

console.log(solve({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));