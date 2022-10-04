function solution() {
    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let objOfProducts = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    }

    return function (input) {
        let [command, element1, element2] = input.split(' ');
        if (command == 'restock') {
            obj[element1] += Number(element2);
            return 'Success';
        } else if (command == 'prepare') {
            element2 = Number(element2);
            for (let key of Object.keys(objOfProducts[element1])) {
                if (element2*objOfProducts[element1][key] > obj[key]) {
                    return `Error: not enough ${key} in stock`;
                }
            }

            for (let [key, value] of Object.entries(objOfProducts[element1])) {
                obj[key] -= element2*value;
            }

            return 'Success';
        } else if (command == 'report') {
            let print = '';
            for (let [key, value] of Object.entries(obj)) {
                print += `${key}=${value} `;
            }
            return print.slice(0, -1);
        }
    }
}

let manager = solution();
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock protein 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

