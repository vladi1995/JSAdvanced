function towns(arrOfStrings) {
    arrOfStrings.shift();
    let obj = {};
    let arrOfObj = [];
    for (let el of arrOfStrings) {
        let [town, latitude, longitude] = el.split(' | ');
        let townReal = town.split('| ').pop();
        latitude = Number(latitude);
        let longitudeReal = Number(longitude.split(' |').shift());
        obj = {
            Town: townReal,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitudeReal.toFixed(2)),
        }
        arrOfObj.push(obj);
    }
    console.log(JSON.stringify(arrOfObj));
}

towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);