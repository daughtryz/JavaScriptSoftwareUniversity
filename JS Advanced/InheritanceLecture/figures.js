function solve() {
    class Figure {
        constructor(unit) {
            if(unit === '') {
                this.unit = 'cm';
            } else {
                this.unit = unit;
            }
           
            
        }
    
        changeUnits(currentUnit) {
            this.unit = currentUnit;
        }
    
        transformMetric(val) {
        if(this.unit === 'm') {
            return val/100;
        } else if(this.unit === 'mm') {
            return val*10;
        }
    
        return val;
        }
       get area() {
           throw new Error('No implemented');
       }
    
       toString() {
           return `Figures units: ${this.unit} Area: ${this.area}`;
       }
    }
    
    class Circle extends Figure{
        constructor(radius,unit) {
            this.radius = radius;
            super(units);
        }
    
        get area() {
            const convertedRadius = this.transformMetric(this.radius);
            return Math.PI * convertedRadius * convertedRadius;
        }
    
        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        }
    
    }
    
    class Rectangle extends Figure {
    
        constructor(width,height,unit) {
            this.width = width;
            this.height = height;
            super(unit);
        }
    
        get area() {
            const convertedWidth = this.transformMetric(this.width);
            const convertedHeight = this.transformMetric(this.height)
            return convertedWidth * convertedHeight;
        }
    
        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

}
