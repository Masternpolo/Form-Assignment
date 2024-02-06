function toggleEye(){
    const passwordType = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if(passwordType.type==="password"){
        passwordType.type = "text";
        eyeIcon.innerHTML = "👀"
    }
    else {
        passwordType.type = "password";
        eyeIcon.innerHTML = "👁️";
    }
}

function toggleEye2(){
    const passwordType2 = document.getElementById("password-confirmation");
    const eyeIcon = document.getElementById("eye-icon2");

    if(passwordType2.type==="password"){
        passwordType2.type = "text";
        eyeIcon.innerHTML = "👀"
    }
    else {
        passwordType2.type = "password";
        eyeIcon.innerHTML = "👁️";
    }
}



// 👁️👀