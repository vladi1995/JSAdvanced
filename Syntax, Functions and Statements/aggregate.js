function aggregateEl(arrOfElements) {
    let sumai = 0;
    let sum1ai = 0;
    let concatai = "";

    for (let el of arrOfElements) {
        sumai+=el;
        sum1ai+=1/el;
        concatai+=el;
    }

    console.log(sumai);
    console.log(sum1ai);
    console.log(concatai);
}

aggregateEl([1, 2, 3]);