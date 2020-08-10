//Declaracion de variables
const numeros = document.getElementsByName('valor');
const ejecutar = document.getElementsByName('operar');
const banquito = document.getElementById('blanco');
const respu = document.getElementById('resultado');
var resu = document.getElementById('respuesta');
var num2 = '';
var num1 = '';
var okau = undefined;
//Asignando la ejecucion de los eventos que ejecutaran las funciones creadas
respu.addEventListener('click', function(){
	operaciones();
	actua();
});
ejecutar.forEach(function(operarr){
	operarr.addEventListener('click', function(){
		seleccionar(operarr.value);
	});
});
banquito.addEventListener('click', function(){
	limpiar();
	actua();
});
numeros.forEach(function(number){
	number.addEventListener('click', function(){
		ingresodevalores(number.value);
	});
}); 

//Creacion de funciones
function ingresodevalores(num){
	num2 = num2.toString() + num.toString();
	actua();
}
function seleccionar(ok){
	if(num1 !== ''){
		operaciones();
	}
	if(num2 === ''){
		if (ok.toString() === 'I' || ok.toString() === 'R' || ok.toString() === 'P') {
			okau = ok.toString();
			num1 = '0';

		}else{
			return;
		}
	}
	if (num1 !== '0') {
		opera = ok.toString();
		num1 = num2;
		num2 = '';
	}
}
function actua(){
	resu.value = num2;
}
function operaciones(){
	var respuestasss;
	const valo1 = parseFloat(num1);
	const valor2 = parseFloat(num2);
	if(isNaN(valo1) || isNaN(valor2)) return;
	switch(opera){
		case '+':
			respuestasss = valo1 + valor2;
		break;
		case 'x':
			respuestasss = valo1 * valor2;
		break;
		case '-':
			respuestasss = valo1 - valor2;
		break;
		case '/':
			respuestasss = valo1 / valor2;
		break;
		case '%':
			respuestasss = valo1 % valor2;
		break;
		case 'I':
			respuestasss = 1 / valor2;
		break;
		case 'R':
			respuestasss = Math.sqrt(valor2);
		break;
		case 'E':
			respuestasss= Math.pow(valor2, 2);
		break;
	}
	num2 = respuestasss;
	okau = undefined;
	num1 = '';
}
function limpiar(){
	num2 = '';
	num1 = '';
	okau = undefined;
}
limpiar();