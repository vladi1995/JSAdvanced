function strLen(str1,str2,str3) {
    let len = (para) => para.length;
    let sum = len(str1) + len(str2) + len(str3);
    let av = Math.floor(sum/3);
    console.log(sum);
    console.log(av);
}


strLen('chocolate', 'ice cream', 'cake')