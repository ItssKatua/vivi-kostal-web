const cursor = document.getElementById("cursor");

function isTouchDevice() {
    return window.ontouchstart !== undefined;
}

if (isTouchDevice()) {
    //cursor.remove()
}

const curs = {
    fork: {
        src: "../img/fork.png",
        hotspot: { x: 15, y: 68 }
    },
    cherry: {
        src: "../img/cherry.png",
        hotspot: { x: 26, y: 63 }
    },
    both: {
        src: "../img/fork-cherry.png",
        hotspot: { x: 26, y: 63 }
    }
};

let cur = curs.fork;
console.log(cur);

function setCursor(type) {
    cur = curs[type];
    cursor.src = cur.src;
}

document.addEventListener("mousemove", e => {
    updateCurs(e.clientX, e.clientY);
});

function updateCurs(x, y) {
    sessionStorage.setItem("mouseX", x);
    sessionStorage.setItem("mouseY", y);

    cursor.style.transform = `translate(${x - cur.hotspot.x}px, ${y - cur.hotspot.y}px)`;
}

const interactive = "a, button, .clickable, .draggable, .turnable";
// href
document.addEventListener("mouseover", e => {
    if (e.target.closest(interactive)) {
        setCursor("cherry");
    } else {
        setCursor("fork");
    }
});

// mdown
document.addEventListener("mousedown", e => {
    if (e.target.closest(interactive)) {
        setCursor("both");
    }
});

// mup
document.addEventListener("mouseup", e => {
    if (e.target.closest(interactive)) {
        setCursor("cherry");
    } else {
        setCursor("fork");
    }
});

// restore 0,0
window.addEventListener("DOMContentLoaded", () => {
    const x = sessionStorage.getItem("mouseX");
    const y = sessionStorage.getItem("mouseY");

    if (x !== null && y !== null) {
        updateCurs(x, y);
    }
});