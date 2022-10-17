function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedElement = document.getElementById('searchField');
      let searchedCell = Array.from(document.querySelectorAll('tbody tr'));
      for (let el of searchedCell) {
         el.classList.remove('select');
      }
      
      for (let el of searchedCell) {
         if((el.textContent).includes(searchedElement.value)) {
            el.classList.add('select');
         }
      }
      searchedElement.value = '';
   }
}