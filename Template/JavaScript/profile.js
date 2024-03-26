document.addEventListener('DOMContentLoaded', function (){
    updateUserInfo();

    function showForm() {
        $('.userCredentialsList').slideUp(300, function(){
            $('.changeCredentials').slideDown(300);
        })
    }

    function hideForm(){
        $('.changeCredentials').slideUp(300, function(){
            $('.userCredentialsList').slideDown(300);
        })
    }

    $('#editCredentials').on('click', function(){
        showForm();
    })

    $('#cancelButton').on('click', function(){
        hideForm();
    })
});

function updateUserInfo(){
    //Function from sessionStorageUtils.js that returns the session storage JSON session storage
    const userInformation = getUserInformation();
    if(userInformation.profilePicture !== null){
        $('#profilePicture').attr("src", userInformation.profilePicture);
    }
    if(userInformation.surname2 === null){
       $('.defaultH1').html(userInformation.name + " " + userInformation.surname1);
    }
    else{
       $('.defaultH1').html(userInformation.name + " " + userInformation.surname1 + " " + userInformation.surname2);
    }
    $('#gender').html(userInformation.gender);
    $('#height').html(userInformation.height);
    $('#weight').html(userInformation.weight);
    $('#birthdate').html(userInformation.birthdate);
    $('#email').html(userInformation.email);
    $('#username').html(userInformation.username);
}