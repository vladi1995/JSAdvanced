function solve() {
  let textElement = (document.getElementById('text').value).toLowerCase();
  let caseConvension = document.getElementById('naming-convention').value;
  let output = document.getElementById('result');
  let result = '';
  let arrOfTextElement = textElement.split(' ');

  if (caseConvension == 'Camel Case') {
    let firstWord = arrOfTextElement.shift();
    result += firstWord;
    for (let el of arrOfTextElement) {
      result += el[0].toUpperCase() + el.slice(1);
    }
  } else if (caseConvension == 'Pascal Case') {
    for (let el of arrOfTextElement) {
      result += el[0].toUpperCase() + el.slice(1);
    }
  } else {
    result = 'Error!';
  }
  output.textContent = result;
}