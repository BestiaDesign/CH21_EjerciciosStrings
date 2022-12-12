// Ejercicio 1
// Solución 1
/* let nombre = "Johanna"; // "Johanna";
nombre = nombre.toLowerCase();
let letra = "";
let contFinal = 0;

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
console.log(letra, contFinal); */

// Solución 2

let nombreMostrado = document.getElementById("nombreMostrado");
let alertResultado = document.getElementById("alertResultado");

nombreMostrado.addEventListener("click", function (event){
    event.preventDefault();

    let nombre = document.getElementById("inputNombre").value;
    nombre = nombre.toLowerCase();
    let letra = "";
let contFinal = 0;

for (let index = 0; index < nombre.length; index++) {
    // console.log(nombre.charAt(index));
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
alertResultado.innerHTML = 'La letra que más se repite en ' + nombre + ' es: ' + letra;  
});
// console.log(letra, contFinal);


// Ejercicio 2

for (let index = nombre.length; index++) {
    const element = array[index];
    
}

// Entrada
"Nancy Johanna"
// Salida
"annahoJ cynaN"