var buttons = document.querySelectorAll('.number');
var formulario = document.querySelector('form').name;
var input = document.querySelector('.respuesta');

var igual = document.querySelector('.igual');

var reset = document.querySelector('.clear');

var btnsOpc = document.querySelectorAll('.opc');

var borrar = document.querySelector('.borrar');

var cuadrado = document.querySelector('.cuadrado');
var sqrt = document.querySelector('.sqrt');
var inv = document.querySelector('.inv');

input.value = "";

buttons.forEach(button => {
	button.addEventListener('click', function(){
		input.value += button.value;
	});
});

btnsOpc.forEach(btnOpc => {
	btnOpc.addEventListener('click', function(){
		input.value += btnOpc.value;
	});
});

igual.addEventListener('click', function(){
	input.value = eval(input.value);
});

reset.addEventListener('click', function(){
	input.value = "";
});

borrar.addEventListener('click', function(){
	input.value = input.value.slice(0, -1);
});

cuadrado.addEventListener('click', function(){
	input.value = Math.pow(parseFloat(input.value),2);
});

sqrt.addEventListener('click', function(){
	input.value = Math.sqrt(parseFloat(input.value));
});

inv.addEventListener('click', function(){
	input.value = eval(1/input.value)
});
