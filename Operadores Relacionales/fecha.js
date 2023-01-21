let diaHoy = 17;
let diaAyer = 16;
let mesHoy = 10;
let mesAyer = 10;
let mesTexto = "10";
let comparacion;

comparacion = diaHoy > diaAyer;
document.write("Resultado: ",comparacion," - El numero ",diaHoy," es el mayor");
document.write("<br>")

comparacion = diaHoy < diaAyer;
document.write("Resultado: ",comparacion," - El numero ",diaHoy," es el mayor");
document.write("<br>")

comparacion = diaHoy >= diaAyer;
document.write("Resultado: ",comparacion," - El numero ",diaHoy," es el mayor");
document.write("<br>")

comparacion = diaHoy <= diaAyer;
document.write("Resultado: ",comparacion," - El numero ",diaHoy," es el mayor");
document.write("<br>")

comparacion = mesHoy >= mesAyer;
document.write("Resultado: ",comparacion," - Ambos numeros son iguales");
document.write("<br>")

comparacion = mesHoy <= mesAyer;
document.write("Resultado: ",comparacion," - Ambos numeros son iguales");
document.write("<br>")

comparacion = mesTexto == mesAyer;
document.write("Resultado: ",comparacion," - Ambos numeros son iguales");
document.write("<br>")

comparacion = diaHoy == diaAyer;
document.write("Resultado: ",comparacion," - Los numeros no son iguales");
document.write("<br>")

comparacion = mesHoy == mesAyer;
document.write("Resultado: ",comparacion," - Ambos numeros son iguales");
document.write("<br>")

comparacion =  mesHoy === mesAyer;
document.write("Resultado: ",comparacion," - Ambos numeros son iguales");
document.write("<br>")

comparacion = mesAyer === mesTexto;
document.write("Resultado: ",comparacion," - Ambos numeros no poseen el mismo tipo de dato");
document.write("<br>")

comparacion = diaHoy > diaAyer && mesHoy == mesAyer;
document.write("Resultado: ",comparacion, " - Ambas condiciones se cumplen");
document.write("<br>")

comparacion = diaHoy > diaAyer || diaHoy == diaAyer;
document.write("Resultado: ",comparacion," - La primera condicion se cumple, el numero ",diaHoy," es mayor");
document.write("<br>")