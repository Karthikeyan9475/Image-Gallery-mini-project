let currentImageIndex = 0;
let images = document.querySelectorAll(".image img");
// Function to show the popup with the clicked image
function show(index) {
    currentImageIndex = index;//1
    document.getElementById("popup").style.display = "block";
    document.querySelector(".btn-1").style.display = "block";
    document.querySelector(".btn-2").style.display = "block";
    document.body.classList.add("popup-active");
    document.querySelector(".popup-content").style.display="block";
    displayImage(currentImageIndex);//1 //next=2
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".btn-1").style.display = "none";
    document.querySelector(".btn-2").style.display = "none";
    document.body.classList.remove("popup-active");
    document.querySelector(".popup-content").style.display="none";
}

// Function to display image in the popup
function displayImage(index) {
    let popupImage = document.querySelector(".popup-image");
    popupImage.src = images[index].src;//images[1].src//next-images[2].src

    // Update page counter
    let popCount = document.querySelector(".page-counter");
    popCount.textContent = `Page ${index + 1} of ${images.length}`;
}

// Move to the next image
function next() {
    currentImageIndex = (currentImageIndex + 1)%images.length;//1+1
    displayImage(currentImageIndex);
}

// Move to the previous image
function prev() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;//1-1=0+8%8=0
    displayImage(currentImageIndex);
}

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case("ArrowLeft"):
                prev();
                break;
            case("ArrowRight"):
                next();
                break;
        }
    }
})