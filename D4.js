/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */



const areaRettangolo = function (l1,l2) {
    let area = l1*l2;
    return area;
    }

console.log(areaRettangolo(5,3));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(num1, num2) {
    let sum = num1 + num2;
  
    if (num1 === num2) {
      sum *= 3;
    }
  
    return sum;
  };
  
  let numero1 = 5;
  let numero2 = 5;
  
  let risultatoEs2punto0 = crazySum(numero1, numero2);
  console.log("Il risultato di crazySum è: " + risultatoEs2punto0);

  let numero3 = 3;
  let numero4 = 5;
  
  let risultatoEs2punto1 = crazySum(numero3, numero4);
  console.log("Il risultato di crazySum è: " + risultatoEs2punto1);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(numero) {
    let diff = Math.abs(numero - 19);
  
    if (numero > 19) {
      diff *= 3;
    }
  
    return diff;
  };
  
   // INVOCAZIONE DELLA FUNZIONE
  let numeroFornito = 25;
  
  let risultatoEs3 = crazyDiff(numeroFornito);
  console.log("Il risultato di crazyDiff è: " + risultatoEs3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n) {
    let isBoundary = false;
  
    if ((n >= 20 && n <= 100) || n === 400) {
      isBoundary = true;
    }
  
    return isBoundary;
  };
  
    // INVOCAZIONE DELLA FUNZIONE
  let numero = 50;
  
  let risultatoEs4 = boundary(numero);
  console.log("Il risultato di boundary è: " + risultatoEs4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(stringa) {
    let nuovaStringa = stringa;
  
    if (!nuovaStringa.startsWith("EPICODE")) {
      nuovaStringa = "EPICODE " + nuovaStringa;
    }
  
    return nuovaStringa;
  };
  
  // INVOCAZIONE DELLA FUNZIONE
  let stringaFornita = "Accademy";
  
  let risultatoEs5punto1 = epify(stringaFornita);
  console.log("Il risultato di epify è: " + risultatoEs5punto1);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(numero) {
    let multiploDi3 = numero % 3 === 0;
    let multiploDi7 = numero % 7 === 0;
  
    return multiploDi3 || multiploDi7;
  };
  
// INVOCAZIONE DELLA FUNZIONE
  let numeroPositivo = 21;
  
  let risultato = check3and7(numeroPositivo);
  console.log("Il risultato di check3and7 è: " + risultato);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(stringa) {
    let reversed = "";
  
    for (let i = stringa.length - 1; i >= 0; i--) {
      reversed += stringa[i];
    }
  
    return reversed;
  };
  
// INVOCAZIONE DELLA FUNZIONE
  let stringaFornitaEs7 = "EDOCIPE";
  
  let risultatoEs7 = reverseString(stringaFornitaEs7);
  console.log("Il risultato di reverseString è: " + risultatoEs7);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
