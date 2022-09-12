function circleArea(radius) {
    if (typeof radius == 'number') {
        let s = (radius) => Math.PI*radius*radius;
        console.log(s(radius).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

circleArea(5);