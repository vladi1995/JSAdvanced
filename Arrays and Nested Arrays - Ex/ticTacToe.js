function ticTacToe(nestedArr) {
    let ticTacToeArr = [...Array(3)].map(x => Array(3).fill(false));
    let tick = 'X';
    console.log(ticTacToeArr);


    for (let el of nestedArr) {
        let splittedElement = el.split(' ').map(Number);
        let firstElement = splittedElement[0];
        let secondElement = splittedElement[1];

        if (ticTacToeArr[firstElement][secondElement] == false) {

            ticTacToeArr[firstElement][secondElement] = tick;
            tick == 'X' ? tick = 'O' : tick = 'X';
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
    }

    console.log(ticTacToeArr);
}


ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);