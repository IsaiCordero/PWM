$(document).ready(function() {

    const userInformation = getUserInformation();
    var username = userInformation.username;
    var diaActual = new Date().getDay();
    var diaActual = diaActual.toString();
    console.log(diaActual);
    // Cargar el archivo JSON
    $.getJSON('http://localhost:3000/user_workouts', function(relations) {

        // Obtener la lista de ejercicios del JSON
        relations.forEach(function(relation){
            if(username === relation.username) {
                var diaJSON = relation.day;
                var workoutID = relation.workout_id;
                var nombreEntrenamiento = document.getElementById('todayWorkout');
                var imagenEntrenamiento = document.getElementById('todayWorkoutImage');
                if(diaJSON === diaActual) {
                    $.getJSON('http://localhost:3000/workouts', function (workouts) {
                        workouts.forEach(function (workout){
                            if(JSON.stringify(workout.workout_id) === JSON.stringify(workoutID)) {

                                nombreEntrenamiento.textContent = workout.name;
                                imagenEntrenamiento.src = workout.photo;
                            }




                        })

                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        // Manejar errores si la solicitud falla
                        console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
                    });


                } else {
                    nombreEntrenamiento.textContent = 'No workouts for today!';
                    imagenEntrenamiento.src = '../../images/sleeping-icono.jpg';
                }
            }

        })

        // Recorrer la lista de ejercicios y mostrarlos en pantalla

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Manejar errores si la solicitud falla
        console.error('Error al cargar el archivo JSON:', textStatus, errorThrown);
    });
});
