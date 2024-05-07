const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let load = 0;

let int = setInterval(bluring, 30);

function bluring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`;

    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
