function validarFormulario(){
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("registerPassword").value;

    if (name === '' || lastName === '' || birthday === '' || gender === '' || email === '' || password === ''){
        alert("Complete all the fields")
    }



}

function register() {
    window.location.href = 'login.html';
    alert('Register completed');

}