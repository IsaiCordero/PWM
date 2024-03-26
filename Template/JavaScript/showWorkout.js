$(document).ready(function() {
    const userInformation = getUserInformation();

    var workoutId = sessionStorage.getItem('idEntrenamiento');

    // Cargar el archivo JSON de workouts
    $.getJSON('http://localhost:3000/workouts', function(workouts) {
        workouts.forEach(function (workout){
            if(JSON.stringify(workout.workout_id) === workoutId) {
                
                $('#headerExercises').text(workout.name);
                workout.exercises.forEach(function (userExercise){
                    // Cargar el archivo JSON de exercises utilizando $.ajax()
                    $.ajax({
                        url: 'http://localhost:3000/exercises',
                        method: 'GET',
                        dataType: 'json',
                        success: function(exercises) {
                            exercises.forEach(function(exercise){
                                if(JSON.stringify(userExercise.exercise_id) === JSON.stringify(exercise.id)) {

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
                                }
                            });
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.error('Error al cargar el archivo JSON de exercises:', textStatus, errorThrown);
                        }
                    });
                });
            }
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error al cargar el archivo JSON de workouts:', textStatus, errorThrown);
    });
});
