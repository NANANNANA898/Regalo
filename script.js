function enviarRespuestasCuestionario() {
    // Capturamos lo que el usuario escribió en el HTML
    let respuesta1 = document.getElementById('p1').value;
    let respuesta2 = document.getElementById('p2').value;

    // Armamos el texto para el correo
    let cuerpoCorreo = `
        Resultados del Cuestionario:
        ---------------------------------
        Pregunta 1: ${respuesta1}
        Pregunta 2: ${respuesta2}
        ---------------------------------
    `;

    let templateParams = {
        message: cuerpoCorreo
    };

    // Enviamos usando tus IDs
    emailjs.send("service_uzmy86q", "template_v7r05v9", templateParams)
    .then(function(response) {
       console.log('¡Éxito!', response.status, response.text);
       alert("¡Tus respuestas han sido enviadas con éxito!");
    }, function(error) {
       console.error('Error:', error);
       alert("Hubo un problema al enviar. Inténtalo de nuevo.");
    });
}