/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

console.log(function_tot_caratteri(word))

// Invoca la funzione qui e stampa il risultato in console

function function_tot_caratteri(word){
    let vocali = [];
    let contatore = 0; 
    for(let i = 0; i < word.length; i++){
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
            contatore++;
            vocali.push(word[i])
        }
    }
    return contatore + " " + vocali;
}

//Risultato atteso se si passa 'javascript': 3 (a, a, i)