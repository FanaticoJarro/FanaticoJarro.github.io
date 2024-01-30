document.getElementById('verificar-respuestas').addEventListener('click', function() {
    let puntaje = 0;
    const respuestasCorrectas = ['opcion1-1', 'opcion2-3', 'opcion3-1', 'opcion4-2', 'opcion5-2', 'opcion6-2', 'opcion7-2', 'opcion8-2',];
    
    respuestasCorrectas.forEach((respuesta, index) => {
        const pregunta = `pregunta${index + 1}`;
        const seleccionado = document.querySelector(`input[name="${pregunta}"]:checked`);
        
        if (seleccionado && seleccionado.id === respuesta) {
            puntaje++;
        }
    });

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Tu puntaje es ${puntaje} de ${respuestasCorrectas.length}`;
});
