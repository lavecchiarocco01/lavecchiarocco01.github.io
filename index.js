/*consultar si es mayor de edad para ingresar*/
let edad;
edad= Number(prompt("Introduce tu edad"));
if (edad >=18){
    alert("Puedes entrar, eres mayor de edad");
} else {
    alert("Eres menor de edad si entras estas bajo su responsabilidad");
}


// ----------------Funcion------------------------------------------------

var numero = prompt("introduce un numero entero");
var resultado = parimpar(numero);
alert("El numero" + numero+ "es" +resultado);
function parimpar(numero){
    if(numero %2==0){
        return "par";
    }
    else{
        return "impar"
    }
}


