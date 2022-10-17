function solve() {
  let genereateButtonElement = document.querySelector('div#exercise button');

  const generateProduct = function(e) {
    let textArea = JSON.parse(e.target.parentNode.querySelector('textarea').value);
    for (let el of textArea) {
      let nameOfFurniture = el.name;
      let imgSrc = el.img;
      let priceOfFurniture = el.price;
      let decFactor = el.decFactor;

      let newTrElement = document.createElement('tr');

      let newTdImg = document.createElement('td');
      let newImgEl = document.createElement('img');
      newImgEl.src = imgSrc;
      newTdImg.appendChild(newImgEl);

      let newTdName = document.createElement('td');
      newTdName.textContent = nameOfFurniture;

      let newTdPrice = document.createElement('td');
      newTdPrice.textContent = priceOfFurniture;

      let newTdDec = document.createElement('td');
      newTdDec.textContent = decFactor;

      let newTdCheck = document.createElement('td');
      let newCheck = document.createElement('input');
      newCheck.type = 'checkbox';
      newTdCheck.appendChild(newCheck);

      newTrElement.appendChild(newTdImg);
      newTrElement.appendChild(newTdName);
      newTrElement.appendChild(newTdPrice);
      newTrElement.appendChild(newTdDec);
      newTrElement.appendChild(newTdCheck);

      let tableElement = document.querySelector('tbody');
      tableElement.appendChild(newTrElement);
    }
  }

  const buyProducts = function (e) {
    let object = {};
    let parentNode = e.target.parentNode;
    let checkBoxes = Array.from(parentNode.querySelectorAll('div.wrapper div.card-wrapper div.row div.col-md-12 table tbody tr td:last-of-type input'));
    for (let el of checkBoxes) {
      if(el.checked) {
        let parentOfCurrentElement = el.parentNode.parentNode;
        let nameOfCurrentElement = parentOfCurrentElement.children[1].textContent;
        let priceOfCurrentElement = Number(parentOfCurrentElement.children[2].textContent);
        let decFactorOfCurrentElement = Number(parentOfCurrentElement.children[3].textContent);

          object[nameOfCurrentElement] = {
            price: priceOfCurrentElement,
            decFactor: decFactorOfCurrentElement,
          }
      }
    }
    let textArea = document.querySelectorAll('div#exercise textarea')[1];
    let keys = Object.keys(object);
    let sum = Object.values(object);
    let names = '';
    for (let i = 0; i < keys.length; i++) {
      if (i != keys.length - 1) {
        names += keys[i] + ', ';
      } else {
        names += keys[i];
      }
    }
    let totalSum = 0;
    let averageDec = 0;
    let counter = 0;
    for (let el of sum) {
      totalSum += Number(el.price);
      averageDec += Number(el.decFactor);
      counter ++;
    }
    textArea.value += `Bought furniture: ${names}\n`;
    textArea.value += `Total price: ${totalSum.toFixed(2)}\n`;
    textArea.value += `Average decoration factor: ${(averageDec/counter)}`;
  }

  genereateButtonElement.addEventListener('click', generateProduct);
  let buttonBuy = document.querySelectorAll('div#exercise button')[1];
  buttonBuy.addEventListener('click', buyProducts);
}