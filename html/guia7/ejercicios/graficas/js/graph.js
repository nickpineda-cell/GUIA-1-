var input = document.querySelector('.form input');
var espacio = document.querySelector('#bars');
var boton = document.querySelector('button');

barras = document.querySelectorAll('#bars li .bar');

function generarGrafica (valor) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    div.classList.add('bar');

    div.innerText = valor;

    div.style.height = valor + "%";
    li.append(div);
    espacio.append(li);
};

boton.addEventListener('click', ()=> {
    generarGrafica (input.value);  
});
