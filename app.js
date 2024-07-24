const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")

btnEncriptar.addEventListener("click", ev => {
    ev.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    if (texto == "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Este campo no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }

    else if (texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Sin acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Texto en minusculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";
    }
});

/*------------------Boton Desencriptar----------------*/

btnDesencriptar.addEventListener("click", ev => {
    ev.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    if (texto == "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Este campo no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }

    else if (texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Sin acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "700";
        aviso.textContent = "Texto en minusculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";
    }
});

/*----------Boton Copiar---------------*/

btnCopiar.addEventListener("click", ev => {
    ev.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy")
});

















/*function funcEncriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    // El modificador img es una combinacion de tres modificadores diferentes:
    // i: Hace que la busqueda ignore la diferencia entre mayusculas y minusculas.
    // m: Permite que los caracteres "^" y "$" coincidan con el inicio y el final de cada línea en un texto multilínea, no solo al inicio y final de todo el texto.
    // g: Hace que la búsqueda y reemplazo se aplique a todas las coincidencias en el texto, no solo a la primera.
    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    contenido.remove();
    btnCopiar.style.visibility = "inherit";
}

function funcDesencriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    
    
}

function funcCopiar() {
    let contenidoTextArea = document.querySelector("#textoDesencriptado");
    contenidoTextArea.select();
    document.execCommand("copy")
}*/
