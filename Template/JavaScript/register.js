function validRegister(){
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("registerPassword").value;


    register();
    return false;

}

function register() {
    alert("Register completed")
    window.location.href = 'login.html';

}
function validInformation(){
    if(document.getElementById("personalForm").checkValidity()){
        $('#registerTabs a[href="#account"]').tab('show');
    } else{
        document.getElementById("personalForm").reportValidity();
    }
}

