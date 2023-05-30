const currentPage = window.location.pathname;
const navLinksColor = document.querySelectorAll('nav a');
navLinksColor.forEach(link => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add('active');
  }
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents form submission from refreshing the page


  if(isValidName()&& isValidSurname() && isValidEmail() && isValidPhone()){
  alert(userInputName())
  document.getElementById("contactForm").reset();
  document.getElementById("contactForm").style.visibility = "hidden";
}
  }
);

function isValidName() {
  const name = document.getElementById('inputName').value;
  const nameReg = /^[A-Za-z]+$/;

  if (name === '') {
    alert('Please enter your name');
    return false;
  } else if (!nameReg.test(name)) {
    alert('Name is not valid');
    return false;
  } else {
    return true;
  }
}

function isValidSurname() {
  const surname = document.getElementById('inputSurname').value;
  const surnameReg = /^[A-Za-z]+$/;

  if (surname === '') {
    alert('Please enter your surname');
    return false;
  } else if (!surnameReg.test(surname)) {
    alert('Surname is not valid');
    return false;
  } else {
    return true;
  }
}

function isValidEmail() {
  const email = document.getElementById('inputEmail').value;
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === '') {
    alert('Please enter your email');
    return false;
  } else if (!emailReg.test(email)) {
    alert('Email is not valid');
    return false;
  } else {
    return true;
  }
}

function isValidPhone() {
  const phone = document.getElementById('inputNum').value;
  const phoneReg = /^\d{10}$/; // match 10 digits

  if (phone === '') {
    alert('Please enter your phone number');
    return false;
  } else if (!phoneReg.test(phone)) {
    alert('Phone Number is not valid');
    return false;
  } else {
    return true;
  }
}


/*function thankYou(){
   var statement= document.getElementById('thankYouStatement');
   if (statement.style.visibility=='visible') {
       statement.style.visibility = 'hidden';
   }else
       statement.style.visibility = 'visible'
}*/

function userInputName(){
var inputName = document.getElementById('inputName').value;
var inputSurname = document.getElementById('inputSurname').value;
var fullName = inputName + " " + inputSurname;
document.getElementById('nameInput').innerHTML = fullName;
return "Thank you " + fullName + " for getting in contact with us. We will get back to you with an answer shortly.";
} 

/*function sendMail(){
  var params = {
    from_name: document.getElementById("fullName").value,
    fullName: document.getElementById("fullName").value,
    inputName: document.getElementById("inputName").value,
    inputSurname: document.getElementById("inputSurname").value,
    inputNum: document.getElementById("inputNum").value,
    inputEmail: document.getElementById("inputEmail").value,
    inputEnquiry: document.getElementById("inputEnquiry").value
  }
  emailjs.send("service_dmd7c45","template_jj2lwi9", params).then(function(res){
    alert("Sent successfully" + res.status);
  });
}*/