// ! TRACCIA
/* 
Mail:
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
 */

const emailList = [
  "emailaddress1@.service.com",
  "emailaddress2@.service.com",
  "emailaddress3@.service.com",
  "emailaddress4@.service.com",
  "emailaddress5@.service.com",
];

let userEmail = prompt("Inserisci la tua mail");
let isUserEmailValid = userEmail.includes(`@` && `.`);

while (!isUserEmailValid) {
  alert("Email inserita non valida, inserire una nuova mail");
  userEmail = prompt("Inserisci la tua mail");
  isUserEmailValid = userEmail.includes(`@` && `.`);
}

// ! PRIMA SOLUZIONE
if (isUserEmailValid) {
  let isEmailInsideList = emailList.includes(userEmail);
  if (isEmailInsideList) {
    console.log(`L'email ${userEmail} risulta nella lista`);
  } else {
    console.log(`L'email ${userEmail} non risulta nella lista`);
  }
}

// ! SECONDA SOLUZIONE
/* if (isUserEmailValid) {
  let isEmailInsideList = false;

  for (let i = 0; i < emailList.length; i++) {
    const currentIndexValue = emailList[i];
    //console.log(currentIndexValue);
    if (userEmail === currentIndexValue) {
      isEmailInsideList = true;
    }
  }

  if (isEmailInsideList) {
    console.log(`L'email ${userEmail} risulta nella lista`);
  } else {
    console.log(`L'email ${userEmail} non risulta nella lista`);
  }
} */
