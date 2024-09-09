function photoClicked(photo, orientation) {
   const popupDiv = document.querySelector("#popup")
   const popupOverlayDiv = document.querySelector("#popup-overlay")

   if (orientation === "portrait") {
      popupDiv.style.width = "40%"
      popupDiv.style.height = "60%"
   }
   else {
      popupDiv.style.width = "80%"
      popupDiv.style.height = "60%"
   }
   
   popupDiv.style.display = "flex"
   popupOverlayDiv.style.display = "flex"

   const clickedImage = photo.querySelector("img")
   const popupImage = document.querySelector("#popup img")

   popupImage.src = clickedImage.src
}

function hidePopup() {

   const popupDiv = document.querySelector("#popup")
   const popupOverlayDiv = document.querySelector("#popup-overlay")

   popupDiv.style.display = "none"
   popupOverlayDiv.style.display = "none"
}

