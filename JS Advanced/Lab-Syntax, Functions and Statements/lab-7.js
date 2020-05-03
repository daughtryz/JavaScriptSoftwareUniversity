function solve(day) {

    var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if(days.indexOf(day) === -1) {
        return 'error';
    }
    let index = days.indexOf(day);

    return index + 1
}

console.log(solve('kur'));