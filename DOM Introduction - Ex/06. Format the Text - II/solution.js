function solve() {
  let textElement = document.getElementById('input').value;
  let splittedText = textElement.split('.').filter(x=>x!='');
  let outputElement = document.getElementById('output');

  while (splittedText.length > 0) {
    let paragraphText = splittedText.splice(0,3).join('.') + '.';
    outputElement.innerHTML += `<p>${paragraphText}</p>`;
    /*
    let p = document.createElement('p');
    p.textContent = paragraphText;
    outputElement.appendChild(p);
    */
  }
}