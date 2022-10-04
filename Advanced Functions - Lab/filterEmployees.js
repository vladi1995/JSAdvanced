function reveiceInfo(string, criteria) {
    let arr = criteria.split('-');
    let crit = arr[0];
    let val = arr[1];

    /*
    let obj = JSON.parse(string).filter(x => {
        return x[crit] == val;
    });
    */

    
    let obj = JSON.parse(string).filter(x=>x[crit] == val).map((x,i)=>{
        console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
    });
        

    /*
    let counter = 0;
    for (let el of obj) {
        console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`);
        counter++;
    }
    */

}

reveiceInfo(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'


);