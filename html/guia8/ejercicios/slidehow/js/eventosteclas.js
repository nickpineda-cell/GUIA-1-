var boton1 = document.querySelector('.avance');
var boton2 = document.querySelector('.retroceso');

alert('primero presiona las teclas y luego los botones');

document.onkeydown = keyHit;
var thisPic = 0;
function keyHit(evt){
 var myPix = new Array(
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
    "./10.jpg"
);
 var imgCt = myPix.length - 1;
 //37 y 39 son los códigos de las teclas que representan
 //la presión de las teclas de cursor izquierda y derecha
 //respectivamente
 var ltArrow = 37;
 var rtArrow = 39;
 //Manejo del objeto para controlar los eventos del teclado
 //de forma uniforme sin importar el navegador
 var thisKey = (evt) ? evt.which : window.event.keyCode;

  
boton2.addEventListener('click', function (){
    chgSlide(-1);
});
boton1.addEventListener('click', function (){
    chgSlide(1);
});

 if(thisKey == ltArrow){
 chgSlide(-1);
 }
 else if(thisKey == rtArrow){
 chgSlide(1);
 }

 return false;


 function chgSlide(direction){
 thisPic = thisPic + direction;
 if(thisPic > imgCt){ }
 if(thisPic < 0){
 thisPic = imgCt;
 }
 document.getElementById("myPicture").src = myPix[thisPic];
 }
}
