function validLogin(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    login();
    return false;
}

function login() {
    alert("Login completed");
    window.location.href= 'homePage.html';
}