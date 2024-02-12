
let secciones = document.querySelectorAll('.seccion');

for (let i = 1; i < secciones.length; i++) {

    let hijos = secciones[i].children;

    for (let j = 1; j < hijos.length; j++) {
        hijos[j].classList.add('oculto');
    }
}

for (let i = 0; i < secciones.length; i++) {

    let seccion = secciones[i];

    let titulo = seccion.children[0];

    titulo.addEventListener('click', ocultar)
        
        function ocultar() {
        for (let j = 1; j < seccion.children.length; j++) {
            seccion.children[j].classList.toggle('oculto');
        }
        }
    }