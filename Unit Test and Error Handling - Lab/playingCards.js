function factoryFunction(string1, string2) {
    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    let initializedFace = string1;
    let initializedSuit = string2;

    if (!validCardFaces.includes(initializedFace)) {
        throw new Error('Error');
    }


    let result = `${initializedFace}${validCardSuits[initializedSuit]}`;
    return result.toString();
}

console.log(factoryFunction(1, 'S'));