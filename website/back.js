const openImg = document.getElementById("animated");

const closedImg = document.createElement("img");
closedImg.className = openImg.className;
closedImg.alt = "";
closedImg.src = "../img/closed.png";
closedImg.style.visibility = "hidden";
openImg.after(closedImg);

openImg.draggable = false;
closedImg.draggable = false;

const frames = [openImg, closedImg, openImg, closedImg];
let current = 0;

function nextFrame() {
    const shown = frames[current];
    const other = shown === openImg ? closedImg : openImg;
    shown.style.visibility = "visible";
    other.style.visibility = "hidden";

    const delay = (current === 3) ? 1000 : 200;
    current = (current + 1) % frames.length;
    setTimeout(nextFrame, delay);
}
nextFrame();