/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const tempo = prompt("che ore sono?")
console.log(function_saluto(name, tempo));

// Invoca la funzione qui e stampa il risultato in console

function function_saluto(name, tempo){
    if(tempo < 13){
        return "buongiorno "+name;
    }
    else if (tempo > 13 && tempo < 17){
        return "buonpomeriggio "+name
    }
    else if(tempo > 17 && tempo < 24){
        return "buonasera "+name
    }
}


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.