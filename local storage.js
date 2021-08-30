let createAccDiv = document.getElementsByClassName('createAccDiv')[0];
let loginDiv = document.getElementsByClassName('loginDiv')[0];
let usernamee = document.getElementsByClassName('usernamee')[0];
let maill = document.getElementsByClassName('emaill')[0];
let passwordd = document.getElementsByClassName('passwordd')[0];
let errMsg = document.getElementsByClassName('invalid-feedback')[0];
let alertAccCreated = document.getElementsByClassName('alert-info')[0];
let passShow = document.getElementsByClassName('passShow')[0]; 
let forgotPassword = document.getElementsByClassName('link-primary')[0];
let submitBtn = document.getElementsByClassName('submitbtn')[0];

submitBtn.addEventListener("click", validateForm);

//define validation
function validateForm() {
	event.preventDefault();
	if(usernamee.value ==  "" || passwordd.value == "" || maill.value == ""){
		usernamee.classList.toggle('is-invalid');
		maill.classList.toggle('is-invalid');
		passwordd.classList.toggle('is-invalid');
	} else {
		usernamee.classList.remove('is-invalid');
		maill.classList.remove('is-invalid');
		passwordd.classList.remove('is-invalid');
		usernamee.classList.toggle('is-valid');
		maill.classList.toggle('is-valid');
		passwordd.classList.toggle('is-valid');
	}
	if(localStorage.getItem("usernameValue") == usernamee.value){
		if(usernamee.value == localStorage.getItem("usernameValue")){
			usernamee.classList.toggle('is-invalid');
			maill.classList.toggle('is-invalid');
			passwordd.classList.toggle('is-invalid');
			errMsg.innerText = "";
			let alertExists = document.getElementsByClassName('alertExists')[0];
			alertExists.style.display = "block";
			alertExists.style.animation = "ananthMenuDropdownFade .5s forwards";
			setTimeout(() => {
				alertExists.style.display = "none";
			}, 10000);
			let loginExists = document.getElementsByClassName('clickableArea')[0];
			alertAccCreated.style.display = "none";
			loginExists.onclick = () => {
			createAccDiv.style.animation = "createAccDivFade 1s forwards";
			setTimeout(() => {
				createAccDiv.style.display = "none";
			}, 1000);
			setTimeout(() => {
				loginDiv.style.display = "block";
				loginDiv.style.animation = "loginDivFade 1s forwards";
			}, 750);
			}//onclick listener end
		}
	}
	if(!passwordd.classList.contains('is-invalid')) {
		if(passwordd.value.length < 6 || passwordd.value.length > 16){
			passwordd.classList.toggle('is-invalid');
			errMsg.innerText = "Password must be at least 6 characters and not more than 16 characters.";
			passwordd.onchange = () => {
				if(passwordd.value.length > 6 && passwordd.value.length < 16){
					passwordd.classList.toggle('is-invalid');
					passwordd.classList.add('is-valid');
				}
			}
		} else {
			errMsg.innerText = "One or more fields seem to be empty. Please fill them up.";
		}
	}

	if(usernamee.value !== "" && passwordd.value !== "" && maill.value !== "" && passwordd.value.length > 6 && passwordd.value.length < 16){
		localStorage.setItem("usernameValue", usernamee.value);
		localStorage.setItem("passwordValue", passwordd.value);
		usernamee.value = "";
		maill.value = "";
		passwordd.value = "";
		alertAccCreated.style.animation = "alertAccCreated .5s forwards";
		let mockATag = document.getElementsByClassName('mockATag')[0];
		mockATag.onclick = () => {
			createAccDiv.style.animation = "createAccDivFade 1s forwards";
			setTimeout(() => {
				createAccDiv.style.display = "none";
			}, 1000);
			setTimeout(() => {
				loginDiv.style.display = "block";
				loginDiv.style.animation = "loginDivFade 1s forwards";
			}, 750);
			
			loginDiv.onanimationend = () => {
				let loginSubmitBtn = document.getElementsByClassName('loginSubmitBtn')[0];
				let usernameee = document.getElementsByClassName('usernameee')[0];
				let passworddd = document.getElementsByClassName('passworddd')[0];
				
				loginSubmitBtn.onclick = loginNow;

				function loginNow() {
					if(usernameee.value == "" || passworddd.value == ""){
						usernameee.classList.toggle('is-invalid');
						passworddd.classList.toggle('is-invalid');
					} else {
						usernameee.classList.remove('is-invalid');
						passworddd.classList.remove('is-invalid');
					}
					if(!passworddd.classList.contains('is-invalid')) {
						if(passworddd.value.length < 6 || passworddd.value.length > 16){
							passworddd.classList.toggle('is-invalid');
							let errMsgg = document.getElementsByClassName('errMsgg')[0];
							errMsgg.innerText = "Password must be at least 6 characters and not more than 16 characters.";

							passworddd.onchange = () => {
								if(passworddd.value.length > 6 && passworddd.value.length < 16){
								passworddd.classList.toggle('is-invalid');
								passworddd.classList.toggle('is-valid');
							} 
						} //end of validation
						if(usernameee.value !== localStorage.getItem("usernameValue")){
							usernameee.classList.toggle('is-invalid');
							let errMsgg = document.getElementsByClassName('errMsgg')[0];
							errMsgg.innerText = "Username doesn't exist.";
							forgotPassword.classList.remove('d-none');
							passShow.value = localStorage.getItem("passwordValue");
							return true;
						} else if(passworddd.value !== localStorage.getItem("passwordValue")) {
							passworddd.classList.toggle('is-invalid');
							let errMsgg = document.getElementsByClassName('errMsgg')[0];
							errMsgg.innerText = "Passwords don't match!";
							return true;
						} else {
							location.href = "https://www.google.com/";
						}
						if(usernameee.value == localStorage.getItem("usernameValue") && passworddd.value == localStorage.getItem("passwordValue")){
							console.log(passworddd.value);
							location.href = "http://localhost:2435/storage/emulated/0/HTML/Web+design+website/Main+page/My+first+responsive+website.html";
						} else {
							usernameee.classList.add('is-invalid');
							passworddd.classList.add('is-invalid');
						}
					}
					}loginDiv.style.animation = "ananthMenuDropdownOut .5s forwards";
					setTimeout(() => {
						loginDiv.style.display = "none";
					}, 510);
					 let appMain = document.getElementsByClassName('appMain')[0];
					appMain.style.display = "block";
					appMain.style.animation = "ananthMenuDropdown .5s forwards";
					setTimeout(() => {
						var myModal = document.getElementById('staticBackdrop');
						myModal.style.display = "block";
						//myModal.style.visibility = "visible";
						myModal.style.opacity = "0";
						myModal.style.animation = "MyBtstrp .5s forwards";
						appMain.classList.toggle('myBackdrop');
						let learnNow = document.querySelector('.learnNow');
						learnNow.onclick = () => {
							window.scrollTo(0,document.body.scrollHeight);
						}
						let urlInp = document.getElementsByClassName('urlInput')[0];
						let closePfp = document.getElementsByClassName('closePfp')[0];
						let uploadPfp = document.getElementsByClassName('uploadPfp')[0];
						let ananthMenu = document.getElementsByClassName('ananthMenu')[0];
						uploadPfp.onclick = () => {
							ananthMenu.src = urlInp.value;
							myModal.style.animation = "modalCloseAn 1s forwards";
							appMain.classList.toggle('myBackdrop');
							setTimeout(() => {
								myModal.style.display = "none";
							}, 1000);
						}
						closePfp.onclick = () => {
							myModal.style.animation = "modalCloseAn 1s forwards";
							appMain.classList.toggle('myBackdrop');
							setTimeout(() => {
								myModal.style.display = "none";
							}, 1000);
						}
					}, 4000);
				}
			}
		}
		setTimeout(() => {
			alertAccCreated.style.animation = "alertAccCreatedDisappear .5s forwards";
		}, 5000);
	}
}

let ananthMenu = document.getElementsByClassName('ananthMenu')[0];
let ananthMenuDropdown = document.getElementsByClassName('ananthMenuDropdown')[0];

ananthMenu.onclick = () => {
	ananthMenu.classList.remove('bagde');
	ananthMenuDropdown.style.display = "block";
	ananthMenuDropdown.style.animation = "ananthMenuDropdown .5s forwards";
	setTimeout(() => {
		ananthMenuDropdown.style.display = "none";
	}, 5000);
}