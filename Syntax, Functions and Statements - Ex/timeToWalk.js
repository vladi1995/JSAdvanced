function timeToWalk(numOfSteps, lenOfFoot, speed) {
    //Note: every 500 meters the students rests for 1 minute!
    const breakEveryMeters = 500;
    const calcDist = ((numOfSteps, lenOfFoot) => (numOfSteps*lenOfFoot/1000));
    const distance = calcDist(numOfSteps, lenOfFoot);
    const timeWithoutBreaks = distance/speed*60;
    const calcBreaks = (Math.floor((distance)*1000/breakEveryMeters));
    let overAllTime = timeWithoutBreaks+calcBreaks;

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (overAllTime >= 60) {
        hours = Math.floor(overAllTime/60);
        minutes = Math.trunc(overAllTime)-hours*60;
    } else {
        minutes = Math.trunc(overAllTime);
    }

    if (Number.isInteger(overAllTime)) {
        seconds = 0;
    } else {
        seconds = ((overAllTime - minutes)*60).toFixed(0);
    }
    
    console.log(`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`);
}

timeToWalk(2564, 0.70, 5.5);