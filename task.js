const img = document.getElementById("counter");
const div = document.getElementById("text");
counter = 0;
isZoomed = true;

img.onclick = () => {
    counter++
    text.textContent = "Всего кликов: " + counter
    if (isZoomed) {
        img.style.width = "300px";
        img.style.height = "300px";
        isZoomed = false;
    } else {
        img.style.width = "200px";
        img.style.height = "200px";
        isZoomed = true;
    }
}

 