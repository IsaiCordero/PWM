document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".register_data")
    const registerButton = document.querySelector(".registerButton");
    const nextButton = document.querySelector("#nextButton");
    const goBackButton = document.querySelector('.btnGoBack');
    const personalInfoTab = document.querySelector('#personal-tab');
    const accountInfoTab = document.querySelector('#account-tab');

    if(form){
        form.addEventListener("submit", function(event){
            event.preventDefault();
            if(form.checkValidity()){
                validRegister();
            }
            else{
                alert("No funca!")
            }
        });
    }
    else{
        alert("Not function");
    }
    if(nextButton && accountInfoTab){
        nextButton.addEventListener("click", function(event){
            if ($('.personalInformation input:invalid').length === 0){
                showAccountInformation();
                $('#errorMessage').hide();
            }
            else {
                $('#errorMessage').show();
            }
        });

        accountInfoTab.addEventListener("click", function(){
            if ($('.personalInformation input:invalid').length === 0){
                showAccountInformation();
            }
            else {
                $('#errorMessage').show();
            }
        });
    }
    else{
        alert("Next button not found");
    }
    if(goBackButton && personalInfoTab){
        goBackButton.addEventListener("click", function(){
            showPersonalInformation();
        });
        personalInfoTab.addEventListener("click", function(){
            showPersonalInformation();
        });
    }
    else{
        alert("Go Back button not found");
    }
});

function showAccountInformation(){
    //Personal info form to account info form transition
    $('.personalInformation').slideUp(300, function(){
        $('.accountInformation').slideDown(300);
    });
    //Tab transition
    $('#personal-tab').removeClass('show active');
    $('#account-tab').addClass('active');
    $('#personal').removeClass('show active');
    $('#account').addClass('show active');
}

function showPersonalInformation(){
    //Personal info form to account info form transition
    $('.accountInformation').slideUp(300, function(){
        $('.personalInformation').slideDown(300);
    });

    //Tab transition
    $('#personal-tab').addClass('show active');
    $('#account-tab').removeClass('active');
    $('#personal').addClass('show active');
    $('#account').removeClass('show active');
}
function validRegister(){
    const userName = $("#userName").val().trim();
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
    alert("llega");
    $.ajax({
        data: userInformation,
        type: "POST",
        url: "http://localhost:3000/users",
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

function validPassword(password) {
    const passwordRegex = '/^(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#?¿!¡\$%\^&\*]).{6,}$/';
    if (passwordRegex.test(password) === false) {
        alert("Password must contain at least one uppercase letter, one number, or one special character");
        return false;
    }
    // Si todos los campos están llenos, redirigir al usuario a la página de inicio de sesión
    window.location.href = "../HTML/Template/Login.html";
    return true;
}

/*
function goBack() {
    document.getElementById('account-tab').classList.remove('active');
    document.getElementById('personal').classList.add('active');
    document.getElementById("account").classList.remove("show", "active");
    document.getElementById("personal").classList.add("show", "active");
}
*/
