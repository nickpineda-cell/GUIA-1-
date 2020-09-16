nombre.addEventListener('keyup',
 function() 
 {
    for (let i = 0; i < nombre.value.length; i++) 
    {
        if(isNaN(nombre.value[i]))
        {
            console.log('Es un numero')
        }else 
        {
            nombre.value = nombre.value.slice(0, nombre.length-1);
            alert('Solo letras!');
        }
        
    }
});

correo.addEventListener('keyup', 
function() 
{
    var arroba=0;
    for(let i = 0; i < correo.value.length; i++)
    {
        if(correo.value[i]==="@")
        {
            arroba++;
            if(arroba>1)
            {
                correo.value = correo.value.slice(0, correo.length-1);
                alert('Solo 1 arroba!');
            }
        }
    }
    
});