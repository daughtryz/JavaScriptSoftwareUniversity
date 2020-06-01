

function solve(data) {

    const cars = {};
    for(let line of data) {
        let components = line.split(' | ');
        let carBrand = components[0];
        let carModel = components[1];
        let producedCars = Number(components[2]);

        if(cars.hasOwnProperty(carBrand) === false) {
            cars[carBrand] = {};
        }

        if(cars[carBrand].hasOwnProperty(carModel) === true) {
            cars[carBrand][carModel] += producedCars;
        } else {
            cars[carBrand][carModel] = producedCars;
        }

        

    }
    
    for(let key of Object.keys(cars)) {
        console.log(key);

        for(let kp of Object.keys(cars[key])) {
            console.log(`###${kp} -> ${cars[key][kp]}`)
        }

    }
}

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Clubman | 1000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mercedes-Benz | W163 | 200']);