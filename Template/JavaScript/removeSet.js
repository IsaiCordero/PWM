function removeSet() {
    var divs = document.getElementById('add').getElementsByClassName('añadido');

    if(divs.length > 0) {

        var ultimoDiv = divs[divs.length - 1];
        ultimoDiv.remove();
        contadorSets--;
    } else {

    }
}