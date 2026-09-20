const gallery = document.getElementById("gallery");

async function loadGallery() {
    const folder = gallery.dataset.folder;

    try {
        const response = await fetch(folder + "descriptions.json");
        const data = await response.json();

        const column1 = document.createElement("div");
        const column2 = document.createElement("div");

        column1.className = "masonry-column";
        column2.className = "masonry-column";

        gallery.appendChild(column1);
        gallery.appendChild(column2);

        data.images.forEach((image, index) => {
            const item = document.createElement("div");
            item.className = "turnable shakeable";
            item.dataset.backText = image.description;

            const img = document.createElement("img");
            img.src = folder + image.filename;
            img.alt = image.description;
            img.title = image.description;
            img.draggable = false;

            item.appendChild(img);

            if (index % 2 === 0) {
                column1.appendChild(item);
            } else {
                column2.appendChild(item);
            }
            withCat(img);
        });

        initEffects(gallery);
    }
    catch (err) {
        console.error("descriptions.json caught error: ", err);
    }
}

loadGallery();