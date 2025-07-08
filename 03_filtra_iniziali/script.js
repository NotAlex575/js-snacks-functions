/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const lettera = prompt("quale lettera vogliamo ritornare? ")
console.log(function_lettera(names, lettera))

// Invoca la funzione qui e stampa il risultato in console

function function_lettera(names, lettera){
    return names.filter(name => name.charAt(0) == lettera);
}

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]