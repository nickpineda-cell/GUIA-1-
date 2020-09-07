//Definir la matriz o arreglo con los datos
var palabras = [ 'a contrapelo','a destiempo', 'a quemarropa', 'baño','babor','bacteria', 'casa','cola','carro', 'dedo','dado','dudoso', 'elefante','eno','enojado', 'foco','falasia','farsante', 'galaxia','galon','guanaba', 'hilo','hielo','hacer', 'iglesia','iglú','indu', 'jirafa','juan','juego', 'kilo','kawaki','kendra', 'lunar','luna','londres', 'mirador','montaña','mar', 'nani','nicolas','nuez', 'ñoñeria','ñoño','ñora', 'oso','orina','orar', 'pala','palom','pedro', 'queso','quiso','querer', 'rosa','rosario','rana', 'sol','sal','sed', 'torre','tonel','turin', 'uva','ungria','Urano', 'velero','valentina','volar', 'willson','waterpolista','waterpolo', 'xilofono','xenofobia','xerografia', 'yacimiento','yack','yema', 'zapato','zoologico' ]; 

var significado = [ 'Contra la inclinación o dirección natural del pelo','En un tiempo o momento que es inadecuado','Desde muy cerca', 'habitacion de una casa destinada al aseo','parte izquierda de un barco','organismo muy peueño', 'lugar de vivienda','parte trasera de algunos animales','medio de transporte', 'parte de las manos ','instrumento de juego','que no es muy seguro', 'mamifero cuadrupedo','alimento de animal','sentimiento de disgusto', 'instrumento de iluminacion','sinonimo de mentira','sinonimo de mentiroso', 'espacio de estrellas','unidad de medida','fruta tropical', 'poca cantidad de tela','forma solida del agua','presente de haciendo', 'lugar de adorcion','vivienda de los esquímales','de religión induista', 'animal mamífero ','nombre propio masculino','forma de entretenimiento', 'unidad de peso','fruta japonesa','nombre propio femenino', 'mancha de nacimiento en el cuerpo','uerpo espacial iluminado por el sol','capital inglesa', 'lugar de apreciasion','elevacion de tierra','extension de agua', 'fruta tropical','nombre propio masculino','semilla o grano', 'accion de ñoño','objeto o acción sosa','pimiento pequeño', 'instrumento de trabajo','nombre de ave','nombre propio masculino', 'animal mamifero','secresion liquida del cuerpo','accion de resar', 'alimento proveniente de la leche','accion de querer','tener estimo hacia algo o alguien', 'nombre propio de una flor','cadena evangelica','animal anfibio', 'estrella de menor tamaño','componente proveniente del agua marina','accion de estar sediento', 'tipo de construccion','medida de peso','ciudad italiana', 'fruta tropical','pais europeo','planeta del sistema solar', 'medio de transporte acuatico','nombre propio femenino','accion de vuelo', 'nombre propio masculino','deportist que practica waterpolo','deporte acuatico', 'instrumento musical','odio a los extranjeros','proceso de copiado de un texto o imagen', 'terreno con gran cantidad de mineral','animal similar al bufalo','parte central del huevo', 'prenda de vestir','lugar de animales en cautiverio para entretenimiento' ];
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar(){
 //Creando el controlador de evento para el evento
 //doble clic sobre los elementos del cuadro de lista
 //Cargando los datos en el cuadro de lista al cargar la página
cargarLista();
var opc = document.querySelectorAll('select option');
var values =0;
opc.forEach(op => {
    op.value = values;
    values++;
});

opc.forEach(op => {
    op.addEventListener('dblclick', function(){
       txtarea.value = significado[op.value];
    });
});

 //Capturando el campo de texto sobre el que se ingresan los deportes
 //mediante pulsasión de tecla
 var texto = document.getElementById("txtsport");
 if(texto.addEventListener){
 texto.addEventListener("keyup", buscar, false);
 }
 else if(texto.attachEvent){
 texto.attachEvent("onkeyup", buscar);
 }

}
function cargarLista() {
 // Cargamos el combo
for(x=0;x<palabras.length;x++)
 document.frmsearchsport.lstsports[x] = new Option(palabras[x]);

}


function limpiarLista() {
 for(x=document.frmsearchsport.lstsports.length;x>=0;x--)
 document.frmsearchsport.lstsports[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
