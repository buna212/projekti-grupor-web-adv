
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

  // REGEX (BEGINNER LEVEL)
  var nameRegex = /^[A-Za-z]+$/;
  var emailRegex = /@.*\.com$/;

  // FIRST NAME CHECK
  if (nameRegex.test(firstName)) {
    document.getElementById("firstNameError").style.display = "none";
  } else {
    document.getElementById("firstNameError").style.display = "block";
  }

  // LAST NAME CHECK
  if (nameRegex.test(lastName)) {
    document.getElementById("lastNameError").style.display = "none";
  } else {
    document.getElementById("lastNameError").style.display = "block";
  }

  // EMAIL CHECK
  if (emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "none";
  } else {
    document.getElementById("emailError").style.display = "block";
  }
}

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault(); // ⛔ stops page refresh

//   var firstName = document.getElementById("form3Example1").value;
//   var lastName = document.getElementById("form3Example2").value;
//   var email = document.getElementById("form3Example3").value;

//   var nameRegex = /^[A-Za-z]+$/;
//   var emailRegex = /@.*\.com$/;

//   // FIRST NAME
//   if (!nameRegex.test(firstName)) {
//     document.getElementById("firstNameError").style.display = "block";
//   } else {
//     document.getElementById("firstNameError").style.display = "none";
//   }

//   // LAST NAME
//   if (!nameRegex.test(lastName)) {
//     document.getElementById("lastNameError").style.display = "block";
//   } else {
//     document.getElementById("lastNameError").style.display = "none";
//   }

//   // EMAIL
//   if (!emailRegex.test(email)) {
//     document.getElementById("emailError").style.display = "block";
//   } else {
//     document.getElementById("emailError").style.display = "none";
//   }
// });

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   var firstName = document.getElementById("form3Example1").value;
//   var lastName  = document.getElementById("form3Example2").value;
//   var email     = document.getElementById("form3Example3").value;

//   var numberRegex = /[0-9]/;   // ❗ NO g
//   var emailRegex  = /@.*\.com$/;

//   // FIRST NAME
//   if (numberRegex.test(firstName)) {
//     document.getElementById("firstNameError").style.display = "block";
//   } else {
//     document.getElementById("firstNameError").style.display = "none";
//   }

//   // LAST NAME
//   if (numberRegex.test(lastName)) {
//     document.getElementById("lastNameError").style.display = "block";
//   } else {
//     document.getElementById("lastNameError").style.display = "none";
//   }

//   // EMAIL
//   if (!emailRegex.test(email)) {
//     document.getElementById("emailError").style.display = "block";
//   } else {
//     document.getElementById("emailError").style.display = "none";
//   }
// });