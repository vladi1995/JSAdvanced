function getArticleGenerator(articles) {
    return function showNext() { 
        if (articles.length) {   
        let newArticleElement = document.createElement('article');
        newArticleElement.classList.add('article');
        let divElement = document.getElementById('content');
        divElement.appendChild(newArticleElement);

        let currentElement = articles.shift();
        newArticleElement.textContent = currentElement;
        }
    }
}
