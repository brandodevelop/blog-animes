/* Varibles */
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#mensaje");
const btnenviar = document.querySelector("#enviar");
const btnborrar = document.querySelector("#borrar");
const formulario = document.querySelector("form");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* Eventos*/

document.addEventListener("DOMContentLoaded", ()=>{
    btnenviar.disabled = true;
    btnenviar.style.cursor = "not-allowed";
    btnenviar.style.opacity = "0.5";
})

eventListener();
function eventListener(){
    nombre.addEventListener("blur", validarFormulario);
    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    btnenviar.addEventListener("click", enviarEmail);
    btnborrar.addEventListener("click", resetearFormualrio);
}

/* Funciones */

function validarFormulario(e){
    if(e.target.value.length > 0){
        e.target.style.border = "2px solid green";
    }else{
        e.target.style.border = "2px solid red";
        mensajeValidacion("Todos los campos son Obligatorio");
    }


    if(email != "" && asunto.value !== "" &&  mensaje.value !== "" ){
        btnenviar.disabled = true;
        btnenviar.style.cursor = "pointer";
        btnenviar.style.opacity = "1";
    }
}

function enviarEmail(e){
    e.preventDefault();
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "block";
    
    setTimeout(()=>{
        spinner.style.display = "none";

        const parrafo = document.createElement("p");
        parrafo.textContent = "El Mensaje se envio Exitosamente";
        parrafo.classList.add("exito")
        const insert = document.querySelector(".insert");
        formulario.insertBefore(parrafo, insert);

        setTimeout(()=>{
            parrafo.remove();
            resetearFormualrio(e);
        },5000)
    },3000)

}

/*Resetear Formulario*/
function resetearFormualrio(e){
    e.preventDefault();
    formulario.reset();
} 

/* Mnesaje de error*/
function mensajeValidacion(mensaje){
    const error = document.querySelector(".error")
    if(!error){
        const parrafo = document.createElement("p");
        parrafo.textContent = mensaje;
        parrafo.classList.add("error")
        const insert = document.querySelector(".insert");
        formulario.insertBefore(parrafo, insert);
    }

}
