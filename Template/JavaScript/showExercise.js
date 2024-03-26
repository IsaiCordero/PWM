$(document).ready(function() {

    const userInformation = getUserInformation();
    var username = userInformation.username;
    // Cargar el archivo JSON
    $.getJSON('http://localhost:3000/user_exercises', function(relations) {

        // Obtener la lista de ejercicios del JSON
        relations.forEach(function(relation){

            if(username === relation.username) {
                var idEjercicioMostrar = JSON.stringify(relation.exercise_id);

                $.getJSON('http://localhost:3000/exercises', function (exercises) {

                    exercises.forEach(function (exercise){
                        if(JSON.stringify(exercise.id) === idEjercicioMostrar) {
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
                            });

                        }
                    })


                }).fail(function (jqXHR, textStatus, errorThrown) {
                    // Manejar errores si la solicitud falla
                    console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);

                })

            }

        })

        // Recorrer la lista de ejercicios y mostrarlos en pantalla

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Manejar errores si la solicitud falla
        console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
    });
});
