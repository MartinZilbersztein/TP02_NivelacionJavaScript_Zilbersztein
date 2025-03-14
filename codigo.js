/*EJERCICIO 1
const formulario = document.getElementById('formulario1')

formulario.addEventListener('submit', function(){
    const nombre = document.getElementById('Nombre').value;
    event.preventDefault();
    console.log("hola " + nombre);
});*/

/*EJERCICIO 2

const formulario2 = document.getElementById('ejercicio2');
formulario2.addEventListener('submit', function(){
    event.preventDefault();
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    let suma = parseInt(numero1) + parseInt(numero2);
    let resta = numero1-numero2;
    let multiplicacion = numero1*numero2;
    let division = numero1/numero2;
    console.log(suma);
    console.log(resta);
    console.log(multiplicacion);
    console.log(division);
   })*/

   /*EJERCICIO 3
   
const formulario3 = document.getElementById('ejercicio3');
formulario3.addEventListener('submit', function(){
    let numero = document.getElementById('numero').value;
    event.preventDefault();
    let resultado;
    if (numero % 2 == 0)
    resultado = "par"; else resultado = "impar";
    console.log(resultado);
}  )*/


/*EJERCICIO 4
const formulario4 = document.getElementById('ejercicio4');
formulario4.addEventListener('submit', function(){
    const palabra = document.getElementById('palabra').value;
    event.preventDefault();
    console.log(palabra.length);
}  )*/

/*EJERCICIO 5
const formulario5 = document.getElementById('ejercicio5');
formulario5.addEventListener('submit', function(){
    const palabra = document.getElementById('palabra').value;
    const numero = document.getElementById('numero').value;
    event.preventDefault();
    console.log(palabra.repeat(numero));
})*/

/*EJERCICIO 6
const formulario6 = document.getElementById('ejercicio6');
formulario6.addEventListener('submit', function(){
    const limite = 10;
    const numero = document.getElementById('numero').value;
    event.preventDefault();
    for (let i = 1; i <= limite; i++)
    {
        console.log(numero*i);
    }
})*/

/*EJERCICIO 7*
const formulario7 = document.getElementById('ejercicio7');
const numero = Math.floor((Math.random() * (10+1)));//Busqué cómo generar un número entero aleatorio y encontré esto
console.log(numero);
let numeroForm;
const textoMostrando = document.getElementById('textoMostrando');
formulario7.addEventListener('submit', function(){
        numeroForm = document.getElementById('numero').value;
        if (numero != numeroForm)
            {
                if (numero > numeroForm) textoMostrando.innerHTML = "Mayor"; 
                    else if (numero < numeroForm) textoMostrando.innerHTML= "Menor"; 
            }
        else
        {
            console.log("Adivinaste!!"); 
        }
        event.preventDefault();
        formulario7.reset();
           
})*/

/*EJERCICIO 8
const formulario8 = document.getElementById('ejercicio8');
let contador = 0;
formulario8.addEventListener('submit', function(){
    const palabra = document.getElementById('palabra').value.toLowerCase();
    event.preventDefault();
    for (let i = 0; i <= palabra.length-1; i++)
    {
        if (palabra[i] == "a" || palabra[i].includes("e") || palabra[i].includes("i") || palabra[i].includes("o") || palabra[i].includes("u"))
            contador++;
    }
    console.log(contador);
    contador = 0;
}  )*/

/*EJERCICIO 9
const formulario9 = document.getElementById('ejercicio9');
let contador = 0;
formulario9.addEventListener('submit', function(){
    const palabra = document.getElementById('palabra').value.toLowerCase();
    let palabraInvertida = "";
    for (let i = palabra.length-1; i >= 0; i--)
    {
        palabraInvertida+= palabra[i];
    }
    console.log(palabraInvertida);
}  )
*/

/*EJERCICIO 10
const formulario10 = document.getElementById('ejercicio10');
let contador = 0;
formulario10.addEventListener('submit', function(){
    const palabra = document.getElementById('palabra').value.toLowerCase();
    let contador1 = 0, contador2 = palabra.length-1;
    event.preventDefault();
    while (palabra[contador1] == palabra[contador2] && contador1 != contador2)
    {
        contador1++;
        contador2--;   
    }
    if (contador1 != contador2)
        console.log("No es palíndromo");
    else console.log("Es palíndromo")
}  )*/


   

