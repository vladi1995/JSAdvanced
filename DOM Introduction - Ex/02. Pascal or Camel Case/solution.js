function solve() {
  let textElement = document.getElementById('text').value;
  let namingConvension = document.getElementById('naming-convention').value;
  let output = document.getElementById('result');
  let result = '';
  
  
  if (namingConvension == 'Pascal Case') {
    for (let i = 0; i < textElement.length; i++) {
      if (i == 0) {
        result += textElement[i].toUpperCase();
      }
      else if (textElement[i] == ' ') {
        result += textElement[i+1].toUpperCase();
        i++;
      } else {
        result += textElement[i].toLowerCase();
      }
    }
  } else if (namingConvension == 'Camel Case') {
    for (let i = 0; i < textElement.length; i++) {
      if (textElement[i] == ' ') {
        result += textElement[i+1].toUpperCase();
        i++;
      } else {
        result += textElement[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }
  output.textContent = result;
}