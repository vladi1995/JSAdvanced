function sum(n,m) {
    let n1 = Number(n);
    let m1 = Number(m);
    let sum = 0;

    for (let i = n1; i <= m1; i++) {
        sum+=i;
    }
    console.log(sum);
}

sum('1', '5' );