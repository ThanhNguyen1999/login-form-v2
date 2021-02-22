let emailError = document.querySelector("p.error-email");
let passwordError = document.querySelector("p.error-password");

let inputPassword = document.querySelector(".inputPassword");
let inputEmail = document.querySelector(".inputEmail");


function render(location, message) {
	location.innerHTML = message;
}

function checkLengthPassword() {
	if (inputPassword.value.length < 3) {
		render(passwordError, "Nhập lớn hơn 3");
	} else {
		clear(passwordError);
	}
}

function checkLengthEmail(){
  if((inputEmail.value.length <3) || (inputEmail.value.length >30))
  {
    render(emailError, "Nhập lớn hơn 3");
  }
  else{
    clear(emailError);
  }
}


function clear(location){
  render(location,"");
}

function checkingEmail(){
  checkLengthEmail();
}

function checkingPassword() {
	checkLengthPassword();
}

inputPassword.addEventListener("input", function () {
	checkingPassword();
});

inputEmail.addEventListener("input", function() {
  checkingEmail();
});