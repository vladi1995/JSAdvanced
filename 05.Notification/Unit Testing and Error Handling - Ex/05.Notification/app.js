function notify(message) {
  let divElement = document.getElementById('notification');
  divElement.style.display = 'block';
  divElement.textContent = message;

  setTimeout(function() {
    divElement.style.display = 'none';
  },2000);

  divElement.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  })
}
