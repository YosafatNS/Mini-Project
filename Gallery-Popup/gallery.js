

const popup = document.querySelector(".popupGallery");
const content = document.querySelector(".contentGallery");

function popupCard(image) {
    popup.style.cssText = `display:flex;`
    content.src = image.src;
    content.alt = image.alt;
} 

function closeGallery() {
    popup.style.cssText = `display:none;`
}

popup.addEventListener("click", (e) => {
    if(e.target === popup) {
        popup.style.cssText = `display:none;`
    }
})