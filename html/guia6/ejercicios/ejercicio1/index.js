var filas;
var columnas;
var celda;
var valor;

agregar.addEventListener('click', function(){
    filas = numFilas.value;
    columnas = numColumnas.value;

    generartabla (filas, columnas);

    console.log({filas, columnas})
});

actualizar.addEventListener('click', function(){
    celda = Celda.value;
    valor = Valor.value;
    editarCelda (celda, valor)
    console.log({celda, valor})
});

var htmlFila='';
var htmlColumna='';

function generartabla (f, c) {
    for(let i=0; i<f;i++){
        htmlFila += "<tr>";
        for(let j=0;j<c;j++){
            htmlFila += "<td></td>";
        }
        htmlFila += "<tr>";
    }
    tabla.innerHTML = htmlFila;
}

function editarCelda (cell, value){
    document.querySelectorAll('td')[cell-1].innerHTML = value;
}