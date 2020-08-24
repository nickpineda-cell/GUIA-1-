
var n = prompt("Ingrese su número: ")

var numerosPares=0, numerosImpares=0, sumaNumerosPares=0 , sumaNumerosImpares=0, totalDeNumeros=0, nMayor=0, nMenor=9999999999999999;

for( i = 0; i<n.length; i++ ){

    if( n[i] > nMayor ) nMayor = n[i];

    if( n[i] < nMenor ) nMenor = n[i];

    if(n[i]%2==0)
    {
        numerosPares++;
        sumaNumerosPares  = sumaNumerosPares + parseInt(n[i]);
    }

    if(!(n[i]%2==0))
    {
        numerosImpares++;
        sumaNumerosImpares = sumaNumerosImpares + parseInt(n[i]);
    }

    totalDeNumeros += parseInt(n[i]);

};

var numero = document.createElement('p');
var pMayor = document.createElement('p');
var pMenor = document.createElement('p');
var totPares = document.createElement('p');
var totImpares = document.createElement('p');
var sumaPares = document.createElement('p');
var sumaImpares = document.createElement('p');
var total = document.createElement('p');

var seccion = document.querySelector('section');

numero.innerHTML="Numero ingresado: " + n;
seccion.appendChild(numero);

pMayor.innerHTML="Numero mayor: " + nMayor;
seccion.appendChild(pMayor);

pMenor.innerHTML="Numero menor: " + nMenor;
seccion.appendChild(pMenor);

totPares.innerHTML="Total de números pares: " + numerosPares;
seccion.appendChild(totPares);

totImpares.innerHTML="Total de números impares: " + numerosImpares;
seccion.appendChild(totImpares);

sumaPares.innerHTML="La suma de los numeros pares: " + sumaNumerosPares;
seccion.appendChild(sumaPares);

sumaImpares.innerHTML="La suma de los numeros impares: " + sumaNumerosImpares;
seccion.appendChild(sumaImpares);

total.innerHTML="Suma de las cifras del número: " + totalDeNumeros;
seccion.appendChild(total);