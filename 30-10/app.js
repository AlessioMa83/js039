/* 
number metodi sui numeri
string metodi sui string
bigint  
boolean
object (array, function)
null
undefined
symbol

*/


console.dir(Number);
/* console.dir(String);
console.dir(BigInt); */

let n = 0.3;
let somma = 0.10555+0.215455;

if (n == somma) {
    console.log('uguale');
}else {
    console.log('diverso');
}

console.log(typeof NaN);
console.log('ale' + ' ' +  5/* '5' */ );

console.log(Number.MAX_SAFE_INTEGER);

let errore = 'ale' * 5;
console.log(Number.isNaN(errore));

if(Number.isNaN(errore)) {/* se è sbagliato */
    console.log('hai inserito un valore non corretto');
}else {/* altrimenti */
    console.log('non errore');
}
let nStriga = '5.5'/* stringa */
console.log(typeof nStriga);
console.log((Number.parseInt(nStriga)));

console.log(Number.parseFloat(nStriga));

let intero = 5.5
console.log(Number.isInteger(intero));

let nVirgola = 0.5958455544
console.log(nVirgola.toFixed(2));

let nPreciso = 550.55555
console.log(nPreciso.toPrecision(3));

let nNonSicuro = Number.MAX_SAFE_INTEGER 
console.log(nNonSicuro);
console.log(Number.isSafeInteger(nNonSicuro));

console.log(Math.PI);

/* dato il raggio calcola l'area del cerchio */
let r = 5;
let area = Math.PI * (r * r);
console.log(area);

console.log(Math);

let nNegativo = -10;
console.log(Math.abs(nNegativo));

let nCeil = 5.01;
console.log(Math.ceil(nCeil));

let nFloor = 5.9
console.log(Math.floor(nFloor));

console.log(Math.max(5.4555555,5.4555556,15,20,25,30,35,95,100));

let nRandom = Math.random();
console.log(nRandom);

console.log(((Math.random()*6)).toFixed(0));

/* 
operatori matematici
+ add
- sot
* mol
/ div
% modulo (è il resto della divisione)
** (2)2
Math.pow(2,2);

*/

let modulo = 12%2
console.log(modulo);

let mod5 = 12%5
console.log(mod5);

let isPari = 12%2

if(isPari){
    console.log('no');
    console.log(isPari);
}else{
    console.log('si');
    console.log(isPari);
}

let potenza = 2**3
let potenzaMath = Math.pow(2,3)
console.log(potenza);
console.log(potenzaMath);

let precedenza = 5+2*3
let pred = (5+2)*3
console.log(pred); 
console.log(precedenza);

let numeroIncremento = 1
/* numeroIncremento ++ */
numeroIncremento +=5 /* numeroIncremento+5 */ 
console.log(numeroIncremento);

let numeroDecremento = 9
numeroDecremento --

console.log(numeroDecremento);

let negativo = -5
console.log(negativo);
console.log(-negativo);

let nPositivo = 10
console.log(-nPositivo);

let nStringa = '10.5'
console.log(typeof nStringa);
console.log(typeof (+nStringa));/* 10.5 */
console.log(typeof Number(nStringa));/* 10.5 */
console.log(typeof parseInt(nStringa));/* 10 */
console.log( (+nStringa));/* 10.5 */
console.log( Number(nStringa));/* 10.5 */
console.log( parseFloat(nStringa));/* 10 */
