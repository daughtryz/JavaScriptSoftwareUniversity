

class Stringer {
    constructor(innerString,innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this._innerStringHelper = innerString;
    }

    increase(length) {
       
        this.innerLength += length;
    }

    decrease(length) {
        if(this.innerLength > length) {

            this.innerLength -= length;
            if(this.innerLength <= 0) {
                this.innerLength = 0;
            }
            this.innerString = this.innerString.slice(0,this.innerLength);
            this.innerString += '.'.repeat(length);

        } else if(this.innerLength <= length) {
            return '...';
        }
        
    }

    toString() {
        
        return this.innerString;
    }


}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // 