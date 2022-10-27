function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        set: function (value) {
            let splitted = value.split(' ');
            if (splitted.length == 2) {
                this.firstName = splitted[0];
                this.lastName = splitted[1];
            }
        },
        get: function() {
            return this.firstName + ' ' + this.lastName;
        }
    });
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

