function oddPositions(arr) {
    /*
    let result = [];
    for (let i = 1; i < arr.length; i=i+2) {
        result.push(arr[i]);
    }
    let resultReal = result.reverse().map(el=>el*2);
    return resultReal.join(' ');
    */
   let filtered = arr.filter((el,i)=>i%2!=0).reverse().map(el=>el*2).join(' ');
   return filtered;
}

oddPositions([3, 0, 10, 4, 7, 3]);