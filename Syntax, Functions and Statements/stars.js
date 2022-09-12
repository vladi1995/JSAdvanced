function stars(num) {
    if (num !== undefined) {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num));
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    }
}

stars();