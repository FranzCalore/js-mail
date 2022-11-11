let emailAccettate = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let emailDaVerificare = prompt("Inserisci la tua Email");
let variabileDiControllo = false;
let bottoneGiocoso = document.getElementById("giocoDellAnno")

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
};

bottoneGiocoso.addEventListener("click", function(){

let valoreUtente= Math.floor(Math.random() * (6-1))+1
let valoreComputer= Math.floor(Math.random() * (6-1))+1

console.log("Il computer ha tirato: " +valoreComputer)
console.log("Tu hai tirato: "+valoreUtente)

if (valoreUtente>valoreComputer){
    console.log("Hai vinto, sei sicuro di non aver barato?")
}
else if (valoreComputer==valoreUtente){
    console.log ("Non riesco a credere che abbiamo pareggiato...")
}else {
    console.log ("HO VINTO IO, STUPIDO UMANO!")
}
})
