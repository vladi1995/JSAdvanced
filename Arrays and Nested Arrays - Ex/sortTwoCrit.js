function sortTwoCriteria(arrOfStrings) {
    let sortedArr = arrOfStrings.sort((a,b)=>(a.length-b.length || a.localeCompare(b)));
    sortedArr.forEach(el => console.log(el));
}

sortTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']


);