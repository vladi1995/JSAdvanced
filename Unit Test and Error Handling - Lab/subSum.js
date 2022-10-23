// function subSum(array, startIndex, endIndex) {
//     if(!Array.isArray(array)) {
//         return NaN;
//     }

//     startIndex = Math.max(0, startIndex);
//     endIndex = Math.min(endIndex, array.length-1);
//     let sum = 0;

//     for (let i = startIndex; i <= endIndex; i++) {
//         sum+=Number(array[i]);
//     }

//     return sum;
// }

function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(endIndex, array.length - 1);

    let slicedArray = array
                    .slice(startIndex, endIndex+1)
                    .map(Number)
                    .reduce((prev, next)=>prev+next,0);
                 return slicedArray;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);