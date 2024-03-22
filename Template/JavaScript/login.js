//Catch button for login form and add listener to compare data.
const loginButton = document.querySelector(".press-button");
loginButton.addEventListener("click", function(event){
    event.preventDefault();
    validateCredentials();
});
function validateCredentials() {
    $.ajax({
        url: "http://localhost:3000/users",
        type: "GET",
        dataType: "json",
        success: function (jsonData){
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            for(const user of jsonData){
                // Credentials match
                if(user.email === email && user.password === password){
                    sessionStorage.setItem("userInformation", JSON.stringify(user));
                    alert("Success!!!");
                    window.location.href = "../Template/homePage.html";
                    return true;
                }
            }
            $('.errorMessage').html("Incorrect mail or password")
            return false;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}