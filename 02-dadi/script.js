// ! TRACCIA
/* 
Gioco dei dadi:
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// ! SOLUZIONE
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("Il numero del computer e':", computerNumber);

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log("Il numero del giocatore e':", userNumber);

if (computerNumber > userNumber) {
  console.log("SCONFITTA! Il computer ha vinto");
} else {
  console.log("VITTORIA! Il giocatore ha vinto");
}
