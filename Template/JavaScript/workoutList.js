$(document).ready(function() {

    const userInformation = getUserInformation();
    // Cargar el archivo JSON
    $.getJSON('http://localhost:3000/user_workouts', function(data) {

        const user_workouts_relation = data;
        user_workouts_relation.forEach(function(relation){

            if(relation.username === userInformation.username) {
                const workout_id = relation.workout_id;
                $.getJSON('http://localhost:3000/workouts', function(data) {

                    const workouts = data;
                    workouts.forEach(function (workout){

                        if(workout.workout_id === workout_id) {

                            $.ajax({
                                url: 'workout.html',
                                dataType:'html',
                                success: function(html) {
                                    var newWorkout = $(html);
                                    newWorkout.find('.dayText').text(workout.name);
                                    newWorkout.find('.dayExercises').text(workout.N_exercises + " Exercises");
                                    newWorkout.find('a').attr('id', workout.workout_id);
                                    newWorkout.find('a').on('click', function() {
                                        // Obtener el ID del entrenamiento
                                        var workoutId = $(this).attr('id');

                                        // Guardar el ID del entrenamiento en sessionStorage
                                        sessionStorage.setItem('idEntrenamiento', workoutId);
                                    });


                                    $('#userWorkout').append(newWorkout);
                                }
                            })
                        }

                    })

                }).fail(function(jqXHR, textStatus, errorThrown) {
                    // Manejar errores si la solicitud falla
                    console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
                });



            }

        });

        // Recorrer la lista de ejercicios y mostrarlos en pantalla

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Manejar errores si la solicitud falla
        console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
    });
});
