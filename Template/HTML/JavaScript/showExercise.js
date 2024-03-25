$(document).ready(function() {
    // Cargar el archivo JSON
    $.getJSON('http://127.0.0.1:3000/db.json', function(data) {
        // Obtener la lista de ejercicios del JSON
        var exercises = data.exercises;
        console.log(exercises);
        exercises.forEach(function(exercise){

            $.ajax({
                url: 'exercise.html',
                dataType:'html',
                success: function(html) {
                    var newExercise = $(html);

                    newExercise.find('strong').text(exercise.name);
                    newExercise.find('img').attr('src', exercise.photo);
                    newExercise.find('.pectoralImagen').attr('alt', 'Imagen de ' + exercise.name);


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
