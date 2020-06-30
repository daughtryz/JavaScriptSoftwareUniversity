

const solution = (function solve() {

    function add(a,b) {
        return [a[0] + b[0],a[1] + b[1]];
    }

    function multiply(a,s) {

        return [a[0]*s,a[1]*s];

    }

    function length(a) {

        return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2));
        
    }
    function dot(a,b) {

        return (a[0]*b[0]) + (a[1]*b[1]);

        
    }

    function cross(a,b) {

        return (a[0]*b[1]) - (a[1]*b[0]);
        
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();

let sol = solve();

console.log(sol.add([1,1],[1,0]));
console.log(sol.multiply([3.5, -2], 2));