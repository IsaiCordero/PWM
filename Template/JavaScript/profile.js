document.addEventListener('DOMContentLoaded', function (){
    updateUserInfo();
    $('#editCredentials').on('click', function(){

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
    $('#email').val(userInformation.email);
}