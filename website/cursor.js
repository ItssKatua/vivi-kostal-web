const cursor = document.getElementById("cursor");

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

// href
document.addEventListener("mouseover", e => {
    if (e.target.closest("a, button, .clickable, .draggable")) {
        setCursor("cherry");
    } else {
        setCursor("fork");
    }
});

// mdown
document.addEventListener("mousedown", e => {
    if (e.target.closest("a, button, .clickable, .draggable")) {
        setCursor("both");
    }
});

// mup
document.addEventListener("mouseup", e => {
    if (e.target.closest("a, button, .clickable, .draggable")) {
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