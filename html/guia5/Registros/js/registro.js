tabla = "";

function crear()
{
if(contra.value.length < 8 ){
alert('CONTRASEÑA CORTA!!!');
}else {
if (contra.value !== contra2.value) {
alert('LAS CONTRASEÑAS NO COINCIDEN!!!');
} else {
registro = new registro(nombres, apellidos, apellidos2, correo_electronico, contra, fecha);
registro.generarIdentificador();
registro.mostrartabla();
}
}
}

// Crando la clase 
class registro
{
// creando el constructor
constructor(nombres, apellidos, apelli, correo, contra, fecha_de_nacimiento)
{
this.id=null;
this.nombres = nombres.value;
this.apellidos = apellidos.value;
this.apellidos2 = apelli.value;
this.correo = correo.value;
this.contra = contra.value;
this.fechaNac = fecha_de_nacimiento.value;
}
//funcion para generar codigo de del miembro 
generarIdentificador() 
{
var letra1 = this.apellidos[0];
var letra2 = this.apellidos2[0];
var a = new Date().getFullYear()
var random = Math.floor(1000 + Math.random() * 9000);
this.id= letra1+letra2+a+random;
}
// funcion para mostrar la tabla
mostrartabla () {
tabla+="<td>"+ this.id +"</td>";
tabla+="<td>"+ this.nombres +"</td>";
tabla+="<td>"+ this.apellidos + " " + this.apellidos2 +"</td>";
tabla+="<td>"+ this.correo +"</td>";
tabla+="<td>"+ this.contra +"</td>";
tabla+="<td>"+ this.fechaNac +"</td>";     
campo_de_tabla.innerHTML = tabla;
}
    
} 

btnRegistro.addEventListener('click', function crearUsuario () 
{
    crear()
});

btnRegistro.attachEvent('onclick', function crearUsuario () 
{
    crear()
});