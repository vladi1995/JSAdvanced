function previousDate(year,month,day) {
    let inputDate = `${year}-${month}-${day}`;
    let date = new Date(inputDate);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

previousDate(2016, 9, 30);