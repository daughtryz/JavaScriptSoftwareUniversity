

(function solve() {

    let arr = [1,2,3];
    Array.prototype.last = function() {
        return arr.slice().pop();
    }
    Array.prototype.skip = function(n) {
        return arr.slice(n);
    }
    
    Array.prototype.take = function(n) {
        return arr.slice(0,n);
    }
    
    Array.prototype.sum = function() {
        
        return arr.reduce((acc,curr) => acc += curr);
        
    }

    Array.prototype.average = function() {
        let count = 0;
        arr.forEach(i => count++);
        
        return arr.reduce((acc,curr) => acc += curr)/count;
        
    }
    return arr.last();
    
})();

console.log(solve());