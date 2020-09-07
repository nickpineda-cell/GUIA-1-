var h1=document.getElementById("h1");
var cambiar = document.getElementById('opciones');
var uno =document.getElementById("a");

var sin=document.getElementById("sin");

    cambiar.addEventListener('change', function(){

       if(cambiar.value=="1"){
        uno.style.backgroundColor="skyblue";
        uno.style.color="black";
        uno.style.borderRadius="10px";
        uno.style.padding="30px";
        uno.style.fontFamily="Grandstander";
        uno.style.boxShadow="1px 1px 1px 1px #000";
 


 
         }
         if(cambiar.value=="2"){
            uno.style.borderRadius="10px";
            uno.style.padding="30px";
            uno.style.backgroundColor="white";
            uno.style.textAlign="justify";
            uno.style.color="black";
            uno.style.fontFamily="Open Sans Condensed";
            uno.style.boxShadow="1px 1px 1px 1px #000";
      
    
           
     
             }
                    if(cambiar.value=="3"){
            uno.style.backgroundColor="blue";
            uno.style.textAlign="center";
            uno.style.color="white";
            uno.style.borderRadius="10px";
            uno.style.padding="30px";
           
            uno.style.boxShadow="1px 1px 1px 1px #000";

    
             }
        
        });

sin.addEventListener('click',function(){

    uno.style.border="none";
    uno.style.borderRadius= 0 + "px";
    uno.style.padding=0;
    uno.style.backgroundColor="white";
    uno.style.textAlign="left";
    uno.style.color="black";
    uno.style.fontFamily="open sans";
    uno.style.boxShadow="0px 0px 0px 0px #000";
});
