
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("x_button");
const popup = document.getElementById("popup");



openBtn.onclick = function() {
     popup.style.display = "block";
}

closeBtn.onclick = function() {
     popup.style.display = "none";
}

var text="The most famous school is Digital School";
var result=text.search("@gmail");

document.getElementById('form3Example4').innerHTML = result;