function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validCardSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        let initializedFace = face;
        let initializedSuit = suit;

        try {
        if (!validCardFaces.includes(initializedFace)) {
            throw (`Invalid card: ${face}${suit}`);
        }

        if (!validCardSuits.hasOwnProperty(suit)) {
            throw (`Invalid card: ${face}${suit}`);
        }
        } catch(error) {
            return error;
        }

        result = `${initializedFace}${validCardSuits[initializedSuit]}`;
        return result.toString();
    }

    let resultString = '';
    let invalidCards = 0;

    for (let el of cards) {
        let splittedElement = el.split('');
        let suit = splittedElement.pop();
        let face = splittedElement.join('');
        let resultFunction = createCard(face, suit);

        if (resultFunction.includes('Invalid card')) {
            console.log(resultFunction);
            invalidCards = 1;
            break;
        } else {
            resultString += createCard(face, suit) + ' ';
        }
    }
    if (!invalidCards) {
        console.log(resultString.trimEnd());
    }
}

printDeckOfCards(['2L', '1J', '1L', '2C']);