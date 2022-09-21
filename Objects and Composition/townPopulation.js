function townPopulation(arrOfStrings) {
    let obj = {};
    arrOfStrings.forEach(el=>{
        let [townName, townPopulation] = el.split('<->');
        townPopulation = Number(townPopulation);
        if (obj.hasOwnProperty(townName)) {
            obj[townName] += townPopulation;
        } else {
            obj[townName] = townPopulation;
        }
    });
    for (let el in obj) {
        console.log(`${el}: ${obj[el]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);