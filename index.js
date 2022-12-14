/*consultar si es mayor de edad para ingresar*/
let edad;
edad= Number(prompt("Introduce tu edad"));
if (edad >=18){
    alert("Puedes entrar, eres mayor de edad");
} else {
    alert("Eres menor de edad si entras estas bajo su responsabilidad");
}


// ----------------Funcion------------------------------------------------

var numero = prompt("Cuanto es 11x11");
var resultado = parimpar(numero);
alert(" La respuesta " + numero + resultado);
function parimpar(numero){
    if(numero == 121){
        return " es correcta Felicitaciones!! Ganaste un cupon para utilizar en la tienda ";
    }
    else{
        return " es incorrecta, lo sentimos no obtuviste ningun premio "
    }
}





