document.addEventListener('DOMContentLoaded', function (){
   updateUserInfo();
});

function updateUserInfo(){
    const userInformationJSON = sessionStorage.getItem("User Information");
    const userInformation = JSON.parse(userInformationJSON);
    $('#homePageTitle').html("Good to see you " + userInformation.name);
}