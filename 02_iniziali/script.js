/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function first_letter(names) {
    return names.map(name => name.charAt(0));
}

// Invoca la funzione qui e stampa il risultato in console
console.log(first_letter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]