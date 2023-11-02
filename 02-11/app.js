let n = 5
n = 6

let stringa = "ciao"
console.log(stringa);
stringa= "buongiorno"
console.log(stringa);

/* 
'' => apici singoli
"" => apici doppi
`` => backtick => interpolare js all'interno della stringa
*/

let str1 = 'ciao'
let str2 = "buongiorno"
let str3 = `ciao buongiorno`
let strComposta = str1 + " " + str2
console.log(strComposta);
/* template literal  */
let insUtente = 'il suo nome'
let n1 = 1
let n2 = 2
console.log(typeof n1);
let ris = 'il nome ' + (n1 + n2)
console.log(ris);
let risBack = `il nome $ ${10+10/* qui inserisci codice js */}`
console.log(risBack);

let somma = 1

if (somma >= 10){
    console.log('maggiore o uguale');
}else {
    console.log('minore');
}

console.log(somma >= 10? 'maggiore o uguale' : 'minore');

/* operatore ternario */
let html = `<div class="${somma >= 10? 'maggiore' : 'minore'}"></div>`
console.log(html);

let html2;

if (somma >= 10){
   html2='<div class="maggiore"></div>'
   console.log(html2);
}else {
    html2='<div class="minore"></div>'
    console.log(html2);
}

console.dir(String);

let lun = 'ciao sono una stringa 4 😁'/* 26 */
console.log(lun.length);
let lun2 = '🥵';
console.log(lun2.length);
console.log(lun2[0], lun2[1]);
console.dir(String);


console.log(lun.length);

let psw = 10
lun = 'ciao 12341A'
if(lun.length >= psw){
   console.log('pasw ok');
}else {
    console.log(`ha inserito una pass lunga ${lun.length} caratteri, ma è troppo corta aggiungi ${psw-lun.length} caratteri`);
}

console.log(lun.length);
console.log(lun[lun.length-1]);/* recuperami tutta l alunghezza meno l'indice */
console.log(lun[10]);

console.log(lun[1]);
console.log(lun.charAt(0));

let controllo = 'ciao'
console.log(lun.indexOf('0'));

let nuova = '     spazio           '
console.log(nuova.length);
console.log(nuova.trim().length);


{let varprova = 'prava testo'}/* scope */
let varprova = 'testo esterno '
console.log(varprova);



/* 
ciao
0123
*/







/*  let rich = await fetch('https://jsonplaceholder.typicode.com/todos/');

let ris3 = await rich.json(); 
console.log(ris3); */

/* const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1b9d53273msh5468cdb1ae94feap1960e8jsna22ccd7a420c',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.Stages[0]);
} catch (error) {
	console.error(error);
} */