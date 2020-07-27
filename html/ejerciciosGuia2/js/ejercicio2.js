var opcion=true;
var producto ={};
var precio ={};
i = 0;
total =0;

do{

    do{
        producto[i]=prompt("nombre dle producto: ");
    }while(producto[i]==="");

    do{
        precio[i]=parseFloat( prompt("precio del producto: "));
    }  while(isNaN(precio[i]  || precio[i]==null ||precio[i]=="" ));

    total+=precio[i];
    opcion=confirm('¿Desea ingresar otro producto?');
  
    i++;
    
}while (opcion==true);


with(document){

    write("<table><thead><tr><th>Producto</th><th>Precio</th></thead><tbody>");
    for(x=0; x<i; x++){
        write("<tr><td>"+ producto[x] + " <br></td>");
        write("<td class>$" + precio[x].toFixed(2) + "<br> </td></tr>");
    }
    write("<tr><td> total  <br></td><td class>$" + parseFloat(total).toFixed(2) + "<br> </td></tr></tbody></table>");

};

