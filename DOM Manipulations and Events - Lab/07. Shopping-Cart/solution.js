function solve() {
   let objOfProducts = {};

   const addProduct = function(e) {
      let parentNodeDiv = e.target.parentNode.parentNode;
      let productName = parentNodeDiv.querySelector('div.product-details div.product-title').textContent;
      let productPrice = Number(parentNodeDiv.querySelector('div.product-line-price').textContent);  

      if (objOfProducts.hasOwnProperty(productName)) {
         objOfProducts[productName] += productPrice;
      } else {
         objOfProducts[productName] = productPrice;
      }

      let textAreaElement = document.querySelector('textarea');
      let addedContent = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      textAreaElement.value += addedContent;

      return objOfProducts;
   }  

   const calculateSum = function(e) {
      let textAreaElement = document.querySelector('textarea');
      let productPrices = Object.values(objOfProducts);
      let productNames = Object.keys(objOfProducts);
      let listOfProductNames = '';
      for (let i = 0; i < productNames.length; i++) {
         if (i != productNames.length-1) {
            listOfProductNames += productNames[i] + ', ';
         } else {
            listOfProductNames += productNames[i];
         }
      }
      let sum = productPrices.reduce((prev, next)=>prev+next,0);
      let addedContent = `You bought ${listOfProductNames} for ${sum.toFixed(2)}.`;
      textAreaElement.value += addedContent;
      e.target.disabled = true;
      Array.from(e.target.parentNode.querySelectorAll('div.product div.product-add button')).forEach(eachEl=>{
         eachEl.disabled = true;
         console.log(eachEl);
      });
   }  

   let clickedButtonElement = Array.from(document.querySelectorAll('div.product div.product-add button')).forEach(eachButton=>{
      eachButton.addEventListener('click', addProduct);
   });

   let checkOutButtonElement = document.getElementsByClassName('checkout');
   
   checkOutButtonElement[0].addEventListener('click', calculateSum);
}