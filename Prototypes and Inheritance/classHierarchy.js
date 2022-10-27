function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(value) {
            this.units = value;
        }
        changeUnitsTable() {
            let param = 1;
            if (this.units == 'm') {
                param /= 100;
            } else if (this.units == 'mm') {
                param *= 10;
            }
            return param;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            const param = super.changeUnitsTable();
            this.radius = param * this._radius;
            return Math.PI*this.radius*this.radius;
        }

        toString() {
            const result = super.toString();
            const param = super.changeUnitsTable();
            return `${result} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            const param = super.changeUnitsTable();
            this.width = param * this._width;
            this.height = param * this._height;
            return this.width*this.height;
        }

        toString() {
            const result = super.toString();
            const param = super.changeUnitsTable();
            return `${result} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle,
    }
}
let result = solve();

let c = new result.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new result.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
