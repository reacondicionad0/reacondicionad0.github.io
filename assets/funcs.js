function addHeaderAndFooter() {
    let header = document.createElement('header');
    header.innerHTML = '<div id="nombre_web">Reacondicionad\u2205</div>' +
        '<a href="/">Inicio</a>' +
        ' | <a href="/sobremi/">Sobre mí</a>' +
        ' | <a href="https://twitter.com/Reacondicionad0" target="_blank">Contacto</a>';
    document.body.prepend(header);
    let footer = document.createElement('footer');
    footer.innerHTML = "<hr>*";
    document.body.appendChild(footer);
}

function datetime2texto() {
    if (document.getElementById("fecha")) {
        let fecha_string = document.getElementById("fecha").textContent;
        fecha = new Date(fecha_string)
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("fecha").textContent = fecha.toLocaleDateString("es-ES", opciones)
    }
}

window.addEventListener('load', addHeaderAndFooter)
window.addEventListener('load', datetime2texto)
window.addEventListener('load', function () {
    if (document.getElementById("titulo")) {
        document.title = "Reacondicionad0 - " + document.getElementById("titulo").textContent;
    }
});
