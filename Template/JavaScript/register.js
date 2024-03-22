document.addEventListener("DOMContentLoaded", function(){
    const registerButton = document.querySelector(".register-button");
    if(registerButton){
        registerButton.addEventListener("click", function(event){
            event.preventDefault();
            validateRegister();
        });
    }
    else{
        alert("Soy gay");
    }
})

// Obtener los valores de los campos del formulario
var userName = document.getElementById("userName").value;
var firstName = document.getElementById("name").value;
var lastName = document.getElementById("lastName").value;
var secondSurname = document.getElementById("SecondSurname").value;
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;
var birthdate = document.getElementById("birthday").value;
var gender = document.getElementById("gender").value;
var email = document.getElementById("email").value;
var password = document.getElementById("registerPassword").value;

function validateRegister() {
    let userInformation = {
        "username": userName,
        "password": password,
        "email": email,
        "name": firstName,
        "surname1": lastName,
        "surname2": secondSurname,
        "birthdate": birthdate,
        "height(cm)": height,
        "weight(kg)": weight,
        "gender": gender
    }
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformation)
    }).then(response => response.json())
        .then(console.log("Hizo algo"));
    /*
    $.ajax({
        data: JSON.stringify(userInformation),
        url: "http://localhost:3000/users",
        type: "POST",
        dataType: "json",
        contentType: false,
        success: function (response) {
            console.log("Successfully registered:", response);
            window.location.href = "../Template/Login.html"
        },
        error: function (xhr, status, error) {
            console.error("Error registering user:", error);
        }
    });
    */
}
function validatePassword(password) {
    const passwordRegex = '/^(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#?¿!¡\$%\^&\*]).{6,}$/';
    if (passwordRegex.test(password) === false) {
        alert("Password must contain at least one uppercase letter, one number, or one special character");
        return false;
    }
    // Si todos los campos están llenos, redirigir al usuario a la página de inicio de sesión
    window.location.href = "../HTML/Template/Login.html";
    return true;
}

