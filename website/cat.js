const CAT = "../img/cat.png";
const CAT_SIZE = 96;

async function withCat(img) {
    if (img.complete) return;

    const host = img.closest(".wrapper") || document.body;

    const cat = document.createElement("img");
    cat.src = CAT;
    cat.alt = "";
    cat.draggable = false;
    cat.className = "cat spin";
    host.appendChild(cat);

    img.classList.add("img-pending");
    img.style.minHeight = "96px";

    let loaded = false;

    const follow = () => {
        if (loaded) return;
        if (img.naturalWidth) img.style.minHeight = "";

        const r = img.getBoundingClientRect();
        const h = host.getBoundingClientRect();
        const size = r.width ? Math.min(CAT_SIZE, r.width * 0.6) : CAT_SIZE;

        cat.style.width = size + "px";
        cat.style.left = r.left - h.left + r.width / 2 - size / 2 + "px";
        cat.style.top = r.top - h.top + r.height / 2 - (cat.offsetHeight || size) / 2 + "px";

        requestAnimationFrame(follow);
    };
    follow();

    await new Promise(done => {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
    });
    loaded = true;
    await img.decode().catch(() => { });

    cat.remove();
    img.classList.remove("img-pending");
    img.style.minHeight = "";
}

document.querySelectorAll(".wrapper img").forEach(withCat);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw.js").catch(() => { });
}