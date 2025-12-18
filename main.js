
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("x_button");
const popup = document.getElementById("popup");



openBtn.onclick = function() {
     popup.style.display = "block";
}

closeBtn.onclick = function() {
     popup.style.display = "none";
}

function checkForm() {

  var email = document.getElementById("form3Example3").value;


  var emailRegex = /@.*\.com$/;

  if (emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "none";
  } else {
    document.getElementById("emailError").style.display = "block";
  }
}

function openMenu(){
    var menu=document.getElementById("navbarButtonsExample");
    if (menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
