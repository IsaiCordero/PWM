function getUserInformation(){
    const userInformationJSON = sessionStorage.getItem("User Information");
    if(userInformationJSON){
        return JSON.parse(userInformationJSON);
    }
    return null;
}