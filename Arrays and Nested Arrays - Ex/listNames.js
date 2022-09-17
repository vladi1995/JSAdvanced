function listNames(arrOfNames) {
    let sorted = arrOfNames.sort((a,b)=>a.localeCompare(b));
    let counter = 1;
    sorted.forEach(el => {
        console.log(`${counter}.${el}`);
        counter++;
    });
}

listNames(["John", "Bob", "Christina", "Ema"]);