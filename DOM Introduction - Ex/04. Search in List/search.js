function search() {
   let townElements = document.querySelectorAll('#towns li');
   let arrOfTownElements = Array.from(townElements);
   let resultElement = document.getElementById('result');
   let counter = 0;
   console.log(arrOfTownElements);
   let searchedElement = document.getElementById('searchText').value;
   for (let i = 0; i < arrOfTownElements.length; i++) {
      if((arrOfTownElements[i].textContent).includes(searchedElement) && searchedElement != '') {
         arrOfTownElements[i].style.textDecoration = 'underline';
         arrOfTownElements[i].style.fontWeight = 'bold';
         counter++;
      } else {
         arrOfTownElements[i].style.textDecoration = 'none';
         arrOfTownElements[i].style.fontWeight = 'normal';
      }
   }
   resultElement.textContent = `${counter} matches found`;
}
