
document.addEventListener("DOMContentLoaded", function() {


    // AGREGAR CLASE 'ACTIVE' AL LINK ACTIVO DEL MENU
    const sections  = document.querySelectorAll('section');
    const nav_links = document.querySelectorAll('.menu li a');

    // Función para actualizar el enlace activo
    function actualizar_activo_menu() {

        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        nav_links.forEach((link) => link.classList.remove('active'));
        nav_links[index].classList.add('active');
    }

    // Escuchar el evento scroll
    window.addEventListener('scroll', actualizar_activo_menu);


    // FORMULARIO DE CONTACTO - VALIDACIONES
    const form = document.querySelector("#contacto_form");
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // Selecciona los elementos del formulario
        const nombreElement  = e.target.querySelector("input[name='nombre']");
        const emailElement   = e.target.querySelector("input[name='email']");
        const mensajeElement = e.target.querySelector("textarea[name='mensaje']");

        // Obtiene el valor
        const nombre  = nombreElement.value;
        const email   = emailElement.value;
        const mensaje = mensajeElement.value;

        if (!nombre || !email || !mensaje) {
            alert("Todos los campos son obligatorios");
            ( !nombre )  ? nombreElement.style.border  = "1px solid red" : nombreElement.style.border  = "1px solid #ccc";
            ( !email )   ? emailElement.style.border   = "1px solid red" : emailElement.style.border   = "1px solid #ccc";
            ( !mensaje ) ? mensajeElement.style.border = "1px solid red" : mensajeElement.style.border = "1px solid #ccc";
            return;
        }

        alert("Formulario enviado correctamente");

        // Elimina el border rojo
        nombreElement.style.border  = "1px solid #ccc";
        emailElement.style.border   = "1px solid #ccc";
        mensajeElement.style.border = "1px solid #ccc";

        // Limpia el formulario
        e.target.reset();
        
    });



    // SKILLS PORCENTAJES Y COLORES DINAMICOS
    let barras = document.querySelectorAll('.progress-bar'); // Selecciona todos los elementos con la clase 'progress-bar'
    // Recorre cada barra de progreso
    barras.forEach(function(barra) {

        // Lee los valores de los atributos data-porcentaje y data-color
        let porcentaje = barra.getAttribute('data-porcentaje');
        let color      = barra.getAttribute('data-color');

        // Aplica el ancho y el color de fondo a la barra de progreso
        barra.style.width           = porcentaje + '%';
        barra.style.backgroundColor = color;
    });

});


