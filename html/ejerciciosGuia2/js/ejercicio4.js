numero = prompt("Ingrese un número negativo con decimales (ej: -64.7): ");
numero2 = prompt("Ingrese un número positivo ");

var abs = Math.abs(numero);
var round = Math.round(numero);
var ceil = Math.ceil(numero);
var floor = Math.floor(numero);
var exp = Math.exp(numero);
var log = Math.log(numero2);
var random = Math.random();

with(document){
    write('<section class=\"sec\">');
    write('<p>Math.abs():' + abs + '</p>');
    write('<p>Math.round():' + round + '</p>');
    write('<p>Math.ceil():' + ceil + '</p>');
    write('<p>Math.floor():' + floor + '</p>');
    write('<p>Math.exp():' + exp + '</p>');
    write('<p>Math.log():' + log + '</p>');
    write('<p>Math.random():' + random + '</p>');
    write('</section>');
}