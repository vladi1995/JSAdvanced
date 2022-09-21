function heroicInventory(arrOfStrings) {
    let objOfHeroes = {};
    let arrOfHeroes = [];
    let eachItem = [];
    for (let el of arrOfStrings) {
        let [heroName, heroLevel, heroItems] = el.split(' / ');

        heroLevel = Number(heroLevel);
        if (heroItems) {
            eachItem = heroItems.split(', ');
        } else {
            eachItem = [];
        }
        objOfHeroes = {
            name: heroName,
            level: heroLevel,
            items: eachItem,
        }
        arrOfHeroes.push(objOfHeroes);
    }
    console.log(JSON.stringify(arrOfHeroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);