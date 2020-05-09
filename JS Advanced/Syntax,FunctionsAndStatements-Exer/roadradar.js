

function solve(speed,zone) {

    if(zone == 'interstate' && speed > 90) {
        console.log('excessive speeding');
    } else if(zone == 'residential' && speed > 20) {
        console.log('speeding');
    } else if(zone == 'city' && speed > 50) {
        console.log('excessive speeding');
    } else if(zone == 'motorway' && speed > 130) {
        console.log('reckless driving');
    }
}

solve(120,'interstate');