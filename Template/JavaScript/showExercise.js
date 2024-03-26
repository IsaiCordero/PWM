$(document).ready(function() {
    // Cargar el archivo JSON
    $.getJSON('http://localhost:3000/exercises', function(data) {
        // Obtener la lista de ejercicios del JSON
        var exercises = data;
        exercises.forEach(function(exercises){

            $.ajax({
                url: 'exercise.html',
                dataType:'html',
                success: function(html) {
                    var newExercise = $(html);

                    newExercise.find('strong').text(exercises.name);
                    newExercise.find('img').attr('src', exercises.photo);
                    newExercise.find('.pectoralImagen').attr('alt', 'Imagen de ' + exercises.name);


                    $('#addYourExercise').append(newExercise);
                }
            })

        })

        // Recorrer la lista de ejercicios y mostrarlos en pantalla

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Manejar errores si la solicitud falla
        console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
    });
});
