
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

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  var nameRegex = /^[A-Za-z]+$/;
  var emailRegex = /@.*\.com$/;

  if (nameRegex.test(firstName)) {
    document.getElementById("firstNameError").style.display = "none";
  } else {
    document.getElementById("firstNameError").style.display = "block";
  }

  if (nameRegex.test(lastName)) {
    document.getElementById("lastNameError").style.display = "none";
  } else {
    document.getElementById("lastNameError").style.display = "block";
  }

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
