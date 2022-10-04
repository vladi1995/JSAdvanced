function solve() {
    let taskName = document.getElementById('task');
    let taskDescription = document.getElementById('description');
    let taskDueDate = document.getElementById('date');
    
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', e => {
        e.preventDefault();
        if (taskName.value.length != 0 && taskDescription.value.length != 0 && taskDueDate.value.length != 0) {
            let openSectionElement = document.querySelector('section:nth-child(2)');
            let openSectionElementDiv = openSectionElement.querySelector('div:nth-child(2)');
            
            let newArticleElement = document.createElement('article');
            let newHeadingElement = document.createElement('h3');
            let newParagraphOneElement = document.createElement('p');
            let newParagraphTwoElement = document.createElement('p');
            let newDivElement = document.createElement('div');
            let newButtonOneElement = document.createElement('button');
            let newButtonTwoElement = document.createElement('button');

            newHeadingElement.textContent = taskName.value;
            newParagraphOneElement.textContent = `Description: ${taskDescription.value}`;
            newParagraphTwoElement.textContent = `Due Date: ${taskDueDate.value}`;

            newButtonOneElement.classList.add('green');
            newButtonOneElement.textContent = 'Start';
            newButtonTwoElement.classList.add('red');
            newButtonTwoElement.textContent = 'Delete';

            newDivElement.classList.add('flex');
            newDivElement.appendChild(newButtonOneElement);
            newDivElement.appendChild(newButtonTwoElement);

            newArticleElement.appendChild(newHeadingElement);
            newArticleElement.appendChild(newParagraphOneElement);
            newArticleElement.appendChild(newParagraphTwoElement);
            newArticleElement.appendChild(newDivElement);

            openSectionElementDiv.appendChild(newArticleElement);
            
            taskName.value = '';
            taskDescription.value = '';
            taskDueDate.value = '';
            
            newButtonTwoElement.addEventListener('click', e => {
                newArticleElement.remove();
            });

            newButtonOneElement.addEventListener('click', e => {
                let inProgressSectionElement = document.querySelector('section:nth-child(3)');
                let inProgressSectionElementDiv = inProgressSectionElement.querySelector('div:nth-child(2)');

                let buttonOneToDelete = newArticleElement.querySelector('div button.green');
                let buttonTwoToDelete = newArticleElement.querySelector('div button.red');

                buttonOneToDelete.classList.remove('green');
                buttonOneToDelete.classList.add('red');
                buttonOneToDelete.textContent = 'Delete';

                buttonTwoToDelete.classList.remove('red');
                buttonTwoToDelete.classList.add('orange');
                buttonTwoToDelete.textContent = 'Finish';

                inProgressSectionElementDiv.appendChild(newArticleElement);

                buttonOneToDelete.addEventListener('click', e => {
                    newArticleElement.remove();
                });
                
                buttonTwoToDelete.addEventListener('click', e => {
                    let finishedSectionElement = document.querySelector('section:nth-child(4)');
                    let finishedSectionElementDiv = finishedSectionElement.querySelector('div:nth-child(2)');

                    e.target.parentNode.remove();
                    finishedSectionElementDiv.appendChild(newArticleElement);
                })
            });
        }
    });
}