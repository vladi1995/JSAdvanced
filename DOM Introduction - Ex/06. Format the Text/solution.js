function solve() {
  let textAreaElement = document.getElementById('input').value;
  let splittedText = textAreaElement.split('.');
  let poppedEl = splittedText.pop();
  let lengthOfSplittedText = splittedText.length;
  let resultOutput = document.getElementById('output');

  if (splittedText.length >= 1) {
    let currentParagraph = '';
      for (let i = 0; i < splittedText.length; i++) {
        if (i%3 == 0 && i != 0) {
          resultOutput.innerHTML += `<p>${currentParagraph}</p>`;
          currentParagraph = '';
          currentParagraph += splittedText[i] + '.';
        } else {
          currentParagraph += splittedText[i] + '.';
        }
      }
      resultOutput.innerHTML += `<p>${currentParagraph}</p>`;
  }
}