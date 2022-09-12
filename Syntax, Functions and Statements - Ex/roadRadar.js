function roadRadar(currSpeed, area) {
    const motorWayLimit = 130;
    const interStateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let difference = 0;
    let status = '';
    let limit = 0;

    switch (area) {
        case 'motorway':
            if (currSpeed > motorWayLimit) {
                difference = currSpeed - motorWayLimit;
            }
            limit = motorWayLimit;
            break;
        case 'interstate':
            if (currSpeed > interStateLimit) {
                difference = currSpeed - interStateLimit;
            }
            limit = interStateLimit;
            break;
        case 'city':
            if (currSpeed > cityLimit) {
                difference = currSpeed - cityLimit;
            }
            limit = cityLimit;
            break;
        case 'residential':
            if (currSpeed > residentialLimit) {
                difference = currSpeed - residentialLimit;
            }
            limit = residentialLimit;
            break;

    }

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (difference !== 0) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${currSpeed} km/h in a ${limit} zone`);
    }
}

roadRadar(200, 'motorway');