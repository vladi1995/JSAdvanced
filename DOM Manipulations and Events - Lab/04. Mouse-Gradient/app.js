function attachGradientEvents() {
    let resultDivElement = document.getElementById('result');
    let gradientDivElement = document.getElementById('gradient');

    const gradientChangeElement = (e) => {
        const widthElement = Number(e.target.clientWidth);
        const currentPosition = Number(e.offsetX);
        const result = Math.floor((currentPosition / widthElement)*100);
        resultDivElement.textContent = `${result}%`;
    };

    const gradientMouseOut = (e) => {
        resultDivElement.textContent = "";
    };

    gradientDivElement.addEventListener('mousemove', gradientChangeElement);
    gradientDivElement.addEventListener('mouseout', gradientMouseOut);
}