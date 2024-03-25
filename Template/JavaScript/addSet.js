var contadorSets =2;

function addSet() {
    // Realizar una solicitud para cargar el contenido de setForm.html
    fetch('setForm.html')
        .then(response => response.text()) // Convertir la respuesta a texto
        .then(html => {
            // Crear un nuevo elemento div
            var nuevoDiv = document.createElement('div');
            nuevoDiv.classList.add('añadido');
            // Establecer el contenido HTML del nuevo div con el contenido de setForm.html

            nuevoDiv.innerHTML = html;

            var setLabel = nuevoDiv.querySelector('.setLabel');
            //Buscar el elemento html cuya clase es .setLabel

            if(setLabel) {
                if(contadorSets > 10) {
                   alert("Maximum number of sets reached!")
                } else {
                    setLabel.innerHTML = "<strong>Set " + contadorSets + "</strong>";
                    document.getElementById('add').appendChild(nuevoDiv);
                    contadorSets++;
                }
                //Si se encuentra, pues añade el texto con la variable contador
            }



            //Suma al contador

        })
        .catch(error => {
            console.error('Error al cargar setForm.html:', error);
        });
}
