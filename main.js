
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("x_button");
const popup = document.getElementById("popup");



openBtn.onclick = function() {
     popup.style.display = "block";
}

closeBtn.onclick = function() {
     popup.style.display = "hidden";
}