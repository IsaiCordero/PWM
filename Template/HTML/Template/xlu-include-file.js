// Archivo: xlu-include-file.js

function xLuIncludeFile() {
    let elements = document.querySelectorAll('[xlu-include-file]');

    elements.forEach(element => {
        let file = element.getAttribute('xlu-include-file');
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                element.removeAttribute('xlu-include-file');
                element.innerHTML = xhttp.responseText;
                xLuIncludeFile(); // Llamar a la función nuevamente si es necesario.
            }
        };

        xhttp.open('GET', file, true);
        xhttp.send();
    });
}

// Llama a la función cuando la ventana ha terminado de cargar.
window.onload = function () {
    xLuIncludeFile();
};
