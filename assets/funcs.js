function addHeaderAndFooter() {
    let header = document.createElement('header');
    header.innerHTML = '<div id="nombre_web">Reacondicionad0</div><a href="index.html">Inicio</a>' +
        ' | <a href="/sobremi/index.html">Sobre mí</a>' +
        ' | <a href="https://twitter.com/Reacondicionad0">Contacto</a>';
    document.body.prepend(header);
    let footer = document.createElement('footer');
    footer.innerHTML = "<hr>*";
    document.body.appendChild(footer);

}

function datetime2texto() {
    let fecha_string = document.getElementById("fecha").getAttribute("datetime")
    fecha = new Date(fecha_string)
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("fecha").textContent = fecha.toLocaleDateString("es-ES", opciones)
}

window.addEventListener('load', addHeaderAndFooter)
window.addEventListener('load', datetime2texto)


