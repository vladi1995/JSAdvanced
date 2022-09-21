function carFactory(obj) {
    let newCar = {};
    newCar.model = obj.model;
    newCar.engine = {
        power: 0,
        volume: 0,
    }

    if (obj.power <= 90) {
        newCar.engine.power = 90;
        newCar.engine.volume = 1800;
    } else if (obj.power <= 120) {
        newCar.engine.power = 120;
        newCar.engine.volume = 2400;
    } else if (obj.power <= 200) {
        newCar.engine.power = 200;
        newCar.engine.volume = 3500;
    }

    newCar.carriage = {
        type: obj.carriage,
        color: obj.color,
    }

    let num = obj.wheelsize;

    if (num % 2 == 0) {
        num--;
    }
    newCar.wheels = [num,num,num,num];
    
    return newCar;
}

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

);