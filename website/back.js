const frames = ["../img/open.png", "../img/closed.png", "../img/open.png", "../img/closed.png"];
const delays = [200, 1000];

let current = 0;
const img = document.getElementById('animated');
img.setAttribute('draggable', false)

frames.forEach(src => {
    const i = new Image();
    i.src = src;
});

function nextFrame() {
    img.src = frames[current];

    const delay = (current === 3) ? 1000 : 200;
    current = (current + 1) % frames.length;
    setTimeout(nextFrame, delay);
}
nextFrame();