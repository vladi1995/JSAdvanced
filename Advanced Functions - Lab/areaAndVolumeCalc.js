function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

/*
function solve(area, vol, input) {
    let arr = [];
    let inputParsed = JSON.parse(input);

    for (let el of inputParsed) {
        let calcArea = area.call(el);
        let calcVol = vol.call(el);
        arr.push({area: calcArea, volume: calcVol});
    }
    return arr;
}
*/
function solve(area, vol, input) {
    return JSON.parse(input).map(x => ({
            area: area.call(x),
            volume: vol.call(x),
        }));
}

solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    
);