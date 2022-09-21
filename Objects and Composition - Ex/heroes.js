function solve() {
    return {
        mage: (nameOfHero) => {
            const hero = {
                name: nameOfHero,
                health: 100,
                mana: 100,
            }
            
            hero.cast = (spell) => {
                hero.mana -= 1;
                console.log(`${hero.name} cast ${spell}`);
            }
            return hero;
        },
        fighter: (nameOfHero) => {
            const hero = {
                name: nameOfHero,
                health: 100,
                stamina: 100,
            }
            hero.fight = () => {
                hero.stamina -= 1;
                console.log(`${hero.name} slashes at the foe!`);
            }
            return hero;
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
