function extractText() {
    /*
    let extractedText = document.getElementById('items');
    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = extractedText.textContent;
    */
   let extractedText = document.querySelectorAll('ul#items li');
   let arr = Array.from(extractedText);

   let textAreaElement = document.getElementById('result');
   for (let el of arr) {
      textAreaElement.textContent += el.textContent + '\n';
   }
}