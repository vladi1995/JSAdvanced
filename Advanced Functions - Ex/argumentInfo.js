function argumentInfo(...input) {
    let objOfTypes = {};
    input.forEach(el=>{
        console.log(`${typeof el}: ${el}`);
        if (!objOfTypes.hasOwnProperty(typeof el)) {
            objOfTypes[typeof el] = 0;
        }
        objOfTypes[typeof el] += 1;
    });
    Object.entries(objOfTypes).sort((a,b)=>b[1]-a[1]).forEach(el=>{;
        console.log(`${el[0]} = ${el[1]}`);
    });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })