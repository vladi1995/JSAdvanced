function solve() {
    let buttonOnScreen = document.querySelector('#container button');
    let movieNameElement = document.querySelector('#container input[placeholder="Name"]');
    let movieHallElement = document.querySelector('#container input[placeholder="Hall"]');
    let moviePriceElement = document.querySelector('#container input[placeholder="Ticket Price"]');

    buttonOnScreen.addEventListener('click', function (e) {
    e.preventDefault();
    if (movieNameElement.value != '' && movieHallElement.value != '' && moviePriceElement.value != '' && !isNaN(moviePriceElement.value)) {
        let newLiElement = document.createElement('li');
        let currentUlElement = document.querySelector('#movies ul');

        let newSpanElement = document.createElement('span');
        newSpanElement.textContent = movieNameElement.value;

        let newStrongElement = document.createElement('strong');
        newStrongElement.textContent = `Hall: ${movieHallElement.value}`;

        let newDivElement = document.createElement('div');
        let newTicketElement = document.createElement('strong');
        newTicketElement.textContent = Number(moviePriceElement.value).toFixed(2);
        let newInputElement = document.createElement('input');
        newInputElement.placeholder = 'Tickets Sold';
        newInputElement.type = 'text';
        let newButtonElement = document.createElement('button');
        newButtonElement.type = 'button';
        newButtonElement.textContent = 'Archive';

        newDivElement.appendChild(newTicketElement);
        newDivElement.appendChild(newInputElement);
        newDivElement.appendChild(newButtonElement);

        newLiElement.appendChild(newSpanElement);
        newLiElement.appendChild(newStrongElement);
        newLiElement.appendChild(newDivElement);

        currentUlElement.appendChild(newLiElement);

        movieNameElement.value = '';
        movieHallElement.value = '';
        moviePriceElement.value = '';
        
        newButtonElement.addEventListener('click', e => {
            let newInputElementValue = e.target.parentNode.querySelector('div input[type="text"]').value;

            if (!isNaN(newInputElementValue) && newInputElementValue.length != 0) {
                let archiveUlElement = document.querySelector('#archive ul');
                let newLiElementArchive = document.createElement('li');

                let newSpanElementArchive = document.createElement('span');
                newSpanElementArchive.textContent = e.target.parentNode.parentNode.querySelector('span').textContent;

                let newStrongElementArchive = document.createElement('strong');
                newStrongElementArchive.textContent = `Total amount: ${(Number(newInputElementValue)*Number(e.target.parentNode.parentNode.querySelector('div strong').textContent)).toFixed(2)}`;

                let newButtonElementArchive = document.createElement('button');
                newButtonElementArchive.type = 'button';
                newButtonElementArchive.textContent = 'Delete';

                newLiElementArchive.appendChild(newSpanElementArchive);
                newLiElementArchive.appendChild(newStrongElementArchive);
                newLiElementArchive.appendChild(newButtonElementArchive);

                archiveUlElement.appendChild(newLiElementArchive);

                e.target.parentNode.parentNode.remove();

                newButtonElementArchive.addEventListener('click', e => {
                    e.target.parentNode.remove();
                });
            }   
        })
    }
    });
    let clearElement = document.querySelector('#archive button:last-of-type');
    clearElement.addEventListener('click', e => {
        let deletedLiElement = e.target.parentNode.querySelectorAll('ul li');
        for (let el of deletedLiElement) {
            el.remove();
        }
    })
}

