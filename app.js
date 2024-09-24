let imgs = document.querySelectorAll("img");
let currentImg = null;

imgs.forEach(img => {
    img.addEventListener("click", () => {
        if (currentImg) {
            currentImg.classList.remove("scale");
        }
        
        img.classList.toggle("scale");
        
        currentImg = img.classList.contains("scale") ? img : null;
    });
});
