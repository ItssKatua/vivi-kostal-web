function initEffects(root = document) {
    root.querySelectorAll(".shakeable").forEach(el => {
        if (el.dataset.shake) {
            el.style.setProperty("--shake", el.dataset.shake + "deg");
        }
    });

    root.querySelectorAll(".turnable:not([data-ready])").forEach(el => {
        el.dataset.ready = "true";

        const inner = document.createElement("div");
        const front = document.createElement("div");
        const back = document.createElement("div");

        inner.className = "turnable-inner";
        front.className = "turnable-front";
        back.className = "turnable-back";

        front.append(...el.childNodes);

        if (el.dataset.backText) {
            back.textContent = el.dataset.backText;
        } else {
            const source = document.querySelector(el.dataset.back);
            if (source) back.innerHTML = source.innerHTML;
        }

        inner.append(front, back);
        el.appendChild(inner);

        el.addEventListener("click", () => el.classList.toggle("turned"));
    });
}

initEffects();