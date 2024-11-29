var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Estudiante de Negocios y Comercio Internacional.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Conectando ideas, mercados y oportunidades!')
    .pauseFor(2500)
    // número de caracteres que se borraran
    .deleteChars(14)
    .typeString('<strong>personas!</strong>')
    .pauseFor(2500)
    .start();