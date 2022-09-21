function storeCatalogue(arrOfStrings) {
    let obj = {};
    for (let el of arrOfStrings) {
        let [product, kg] = el.split(' : ');
        let firstWord = product[0];
        if (!obj.hasOwnProperty(firstWord)) {
            obj[firstWord] = {};
        } 
        obj[firstWord][product] = kg;
    }
    let entries = Object.entries(obj).sort((a,b)=>a[0].localeCompare(b[0])).forEach(el=>{
        console.log(el[0]);
        Object.entries(el[1]).sort((a,b)=>a[0].localeCompare(b[0])).forEach(eachEl=>{
            console.log(`  ${eachEl[0]}: ${eachEl[1]}`);
        });
    })
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);