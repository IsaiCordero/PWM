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
function validateRegister() {
    // Obtener los valores de los campos del formulario
    const userName = $("#userName").val().trim();
    console.log(userName)
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const secondSurname = document.getElementById("SecondSurname").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const birthdate = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("registerPassword").value;

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
    alert(JSON.stringify(userInformation));
    $.ajax("http://localhost:3000/users",{
        data: userInformation,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            alert(response);
            window.location.href = "../Template/Login.html"
        },
        error: function (xhr, status, error) {
            console.error("Error registering user:", error);
        }
    });
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

