var push = document.querySelector('.push');
var pop = document.querySelector('.pop');
var reverse = document.querySelector('.reverse');
var salida = document.querySelector('.resultado'); 
var colores = ['rojo', 'azul', 'verde'];
var pushPrompt;
var click=0;

push.addEventListener('click', function(){
    pushPrompt = prompt("Ingresa el elemento que desea añadir: ");
    colores.push(pushPrompt);
    salida.innerHTML = colores;
});


pop.addEventListener('click', function(){
    colores.pop();
    salida.innerHTML = colores;
});



reverse.addEventListener('click', function(){
    click=click + (Math.random()*360);
    colores.reverse();
    salida.innerHTML = colores;
    salida.style.filter = "hue-rotate("+ click +"deg)";
});


salida.innerHTML = colores;

