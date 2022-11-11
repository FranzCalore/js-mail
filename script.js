let emailAccettate = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let emailDaVerificare = prompt("Inserisci la tua Email");
let variabileDiControllo = false;

for (let i = 0; i < emailAccettate.length; i++){
    if (emailDaVerificare == emailAccettate[i]){
        variabileDiControllo = true;
    }
}

if (variabileDiControllo) {
    console.log("Puoi entrare, la tua email è valida!");
} else {
    console.log("Mi dispiace la tua email non è valida");
    let permesso = prompt ("La tua email non è valida, scrivi sì se la vuoi aggiungere alla lista, oppure no se non vuoi")
    switch (permesso){
        case "sì":
        emailAccettate.push(emailDaVerificare)
        console.log("La tua email è stata aggiunta con successo, ora puoi entrare!")
        console.log("La nuova lista di Email accettate è: " +emailAccettate)
        break;
        case "no":
        console.log("Arriverci!")
        break;
        default:
        console.log("Non ho riconosciuto il tuo input")


    }
}
