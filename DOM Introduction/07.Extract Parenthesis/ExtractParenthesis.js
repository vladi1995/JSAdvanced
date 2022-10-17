function extract(content) {
    let pattern = /(\([^(]+\))/g;
    let textElement = document.getElementById('content').textContent;
    let matcher = pattern.exec(textElement);
    let result = [];

    while (matcher) {
        result.push(matcher[1]);
        matcher = pattern.exec(textElement);
    }
    return result.join('; ');
}