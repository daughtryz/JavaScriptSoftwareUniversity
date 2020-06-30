
function solve() {

    const lib = {
        logName() {
            console.log(this.firstName + ' ' + this.lastName);
        }
    }

    const user = {
        firstName: 'Ivan',
        lastName: 'Ilchov'
    };

    lib.logName.call(user);
}

solve();