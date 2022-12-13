// Aquí se escriben los ejercicios con Strings

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar = document.addEventListener("click", function(event) {
    event.preventDefault();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextTarea1 = document.getElementById("exampleFormControlTextTarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextTarea1.value = exampleFormControlTextTarea1.value.trim();
    alertError.style.display = "none";
    alertError.innerHTML="";

    /* console.log(exampleFormControlTextTarea1.value.length);
    console.log("[" +
    exampleFormControlTextTarea1.value.replaceAll(" ", "") + "]"
    ); */

    if (exampleFormControlTextTarea1.value.trim().replaceAll(" ", "").length < 20) {
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o más";
        alertError.style.display = "block";
        exampleFormControlTextTarea1.focus();
        exampleFormControlTextTarea1.select();
    }
// if

// Match
// Expresiones regulares

if (exampleFormControlInput1.value.match(emailRegex) == null) {
    alertError.style.display = "block";
    alertError.innerHTML += "<br/>El correo electrónico no es válido.";
    }
});
