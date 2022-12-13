let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g; //https://emailregex.com/

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1"); //email
    let exampleFormControlTextTarea1 = document.getElementById("exampleFormControlTextTarea1"); // RFC
    let alertError = document.getElementById("alertError");
    exampleFormControlTextTarea1.value = exampleFormControlTextTarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    if (exampleFormControlTextTarea1.value.trim().replaceAll("  " , "").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o más.";
        alertError.style.display="block";
        exampleFormControlTextTarea1.focus();
        exampleFormControlTextTarea1.select();
    }//if

    if (exampleFormControlInput1.value.match(emailRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electrónico no es válido.";
    }
let RFCRegex = /^ [A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
// /^ [A-Z]{4}\d{6}\w{3}$/;
exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase();
    if (exampleFormControlInput2.value.match(RFCRegex) == null) {
        alertError.style.display = "block";
        alertError.innerHTML += "<br/>El RFC no es válido.";
        }


});
