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
// Solución 1
let nombreDesor = document.getElementById("nombreDesor");
let alertResultado1 = document.getElementById("alertResultado1");

nombreDesor.addEventListener("click", function (event){
    event.preventDefault();
    
    let nombreUsuario = document.getElementById("inputNombre1").value;
    nombreUsuario = nombreUsuario.toLowerCase();
    let nombre1 = "";
    
    for (let index = nombreUsuario.length - 1; index>=0; index--) {
        nombre1 += nombreUsuario[index];
       // nombre1 = nombre1 + nombreUsuario[index];
    }
    alertResultado1.innerHTML = 'Tú nombre al revés quedaría así: '  + nombre1;     
});

// Solución 2
/*  function reves(str) {
    let tempStr="";
    for (let indice = str.length - 1; indice < 0; indice--) {
        tempStr += str.charAt(indice);
    } // for indice
    return tempStr;
} // resultado al reves

// Entrada
"Nancy Johanna"
// Salida
"annahoJ cynaN" */

// Ejercicio 3
// Palíndromo (Crear una función para que identifique si la palabra es palíndromo.)

// Solución 1
let palabraEscrita = document.getElementById("palabraEscrita");
let alertResultado2 = document.getElementById("alertResultado2");

palabraEscrita.addEventListener("click", function (event){
    event.preventDefault();

    function inputPalabra2(str) {
        str = str.toLowerCase();

    }
    
    if (str != 0) {
        alertResultado2.innerHTML = 'La palabra ' + str + 'no es Palíndromo'; 
    }
    else {
        alertResultado2.innerHTML = 'La palabra ' + str + 'sí es Palíndromo'; 
    }
});

// Solución 2
/*  function esPalindromo(str) {
        str = str.toLowerCase();
        str = str.replaceAll(" ", "");
       if (reves(str)==str)
            return true;

         return false
} // Es o no Palíndromo */


// Ejercicio 4
