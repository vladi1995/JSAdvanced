function smallestNum(arr) {
    arr.map(Number);
    let sorted = arr.sort((a,b)=>a-b);
    console.log(arr[0] + ' ' + arr[1]);
}

smallestNum([3, 0, 10, 4, 7, 3]);