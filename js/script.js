// es. calcolare prezzo biglietto.
// chiedere km da percorrere 
// chiedere età del passeggero
// calcolare sulla base dell informazioni il prezzo ddel biglietto
// calcolare il prezzo con al massimo due decimali
// 1km costa 0.21€
// sconto del 20% se minorenni
// sconto del 40% se over 65


const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
const anniUtente = prompt('Buongiorno quanti anni ha?');
const kmUtente = prompt('Quanti km vuole percorrere con il nostro treno?');
let prezzo, prezzoRounded, msg;

const prezzoBiglietto = kmUtente * prezzoKm;


if (anniUtente < 18){
    sconto = prezzoBiglietto * (1- scontoMinorenni);
    // sconto = prezzoBiglietto * scontoMinorenni;

    msg += `
    <br>
    Essendo minorenne ha lo sconto del ${scontoMinorenni * 100}% quindi paghi solo ${prezzoRounded}€
    `
}else if(anniUtente > 65){
    sconto = prezzoBiglietto * (1- scontoOver);
    msg += `
    <br>
    Essendo senior ha lo sconto del ${scontoOver * 100}% quindi paghi solo ${prezzoRounded}€
    `
}else{
    sconto = 0;
}

prezzo = prezzoBiglietto - sconto;

prezzoRounded = Math.round((prezzo + Number.EPSILON) * 100) /100;

msg = `Il tuo biglietto costa ${prezzoRounded}€`




document.getElementById('output').innerHTML = msg;