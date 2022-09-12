function validityChecker(x1,y1,x2,y2) {
    function thirdCheck(x1,y1,x2,y2) {
        return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    }

    let resultFirst = Number.isInteger(thirdCheck(x1,y1,0,0));
    let resultSecond = Number.isInteger(thirdCheck(0,0,x2,y2));
    let resultThird = Number.isInteger(thirdCheck(x1,y1,x2,y2));

    if (resultFirst) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (resultSecond) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (resultThird) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1);