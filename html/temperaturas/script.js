var temperatura = prompt("Ingrese la temperatura en grados Celcius");

var txtTemperatura = document.getElementById("temperaturas");
var imgTemperaturas = document.getElementById("imagenes");

temperatura = (temperatura * 9/5) + 32;

if (temperatura <= 32) {
    imgTemperaturas.style.backgroundImage = "url('./img/f6ab9b9fa1955c7f352285049f263193.gif')"; 
    txtTemperatura.innerHTML = "Temperatura: " + temperatura + "°F";
}else if(temperatura >32 && temperatura <=75) {
    imgTemperaturas.style.backgroundImage = "url('./img/climaperfecto.gif')";
    txtTemperatura.innerHTML = "Temperatura: " + temperatura + "°F";
}else if(temperatura >75 && temperatura <100 ) {
    imgTemperaturas.style.backgroundImage = "url('./img/tenor.gif')"; 
    txtTemperatura.innerHTML = "Temperatura: " + temperatura + "°F";
}else if(temperatura >100) {
    imgTemperaturas.style.backgroundImage = "url('./img/gif-calor-infernal3.gif')";
    txtTemperatura.innerHTML = "Temperatura: " + temperatura + "°F";
}


var variable;
if (variable === undefined) {
    console.log('ok');
}
