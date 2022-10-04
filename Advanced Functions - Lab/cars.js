function solve(arr) {
    let newObj = {};

    createName = name => newObj[name] = {};
    inherit = (name, parent) => newObj[name] = Object.create(newObj[parent]);
    set = (name, key, value) => newObj[name][key] = value;

    function print(name) {
        let result = [];

        for (let key in newObj[name]) {
            result.push(`${key}:${newObj[name][key]}`);
        }
        
        console.log(result.join(','));
    }

    for (let el of arr) {
        let splittedArr = el.split(' ');
        
        if (splittedArr.includes('create') && !splittedArr.includes('inherit')) {
            splittedArr.shift();
            createName(splittedArr.join(' '));
        } else if (splittedArr.includes('set')) {
            splittedArr.shift();
            let name = splittedArr.shift();
            let key = splittedArr.shift();
            let value = splittedArr.shift();
            set(name, key, value);
        } else if (splittedArr.includes('print')) {
            splittedArr.shift();
            let name = splittedArr.shift();
            print(name);
        } else if (splittedArr.includes('create') && splittedArr.includes('inherit')) {
            splittedArr.shift();
            let name = splittedArr[0];
            let parent = splittedArr.pop();
            inherit(name, parent);
        }
    }
}
/*
function solve(input) {
    const data = {}

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            const entry = []
            for (const key in data[n]) {
                entry.push(`${key}:${data[n][key]}`)
            }
            console.log(entry.join(", "))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}
*/
solve(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']);