function register(){
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("registerPassword").value;


    alert('Register completed');
    window.location.href = 'login.html';
}