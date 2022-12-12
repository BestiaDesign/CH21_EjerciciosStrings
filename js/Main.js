
let nombre = "Johanna"; // "Johanna";
nombre = nombre.toLowerCase();

/* let nombreMostrado = document.getElementById("nombreMostrado");
let alertResultado = document.getElementById("alertResultado"); */
let letra = "";
let contFinal = 0;

/* nombreMostrado.addEventListener("click", function (event){
    event.preventDefault(); */

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp = 1;
    for (let contador = index+1; contador < nombre.length; contador++) {
        if(nombre.charAt(index) == nombre.charAt(contador))
        contTemp++;
    } // for contador

    if (contTemp > contFinal) {
        contFinal=contTemp;
        letra = nombre.charAt(index);
    } // contTemp>contFinal
} // for index
//});
console.log(letra, contFinal);