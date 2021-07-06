// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente sia in console che in pagina
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli' ];
var userName

do{
    userName = prompt('inserisci il tuo cognome').trim();
    lastName.push(userName);
    
    console.table(lastName);
} while(!userName);


// Check

var isName = false;

var i = 0;
while(i < lastName.length && !isName){
    console.log('entro ed eseguo il ciclo');

    if(userName.toUpperCase() === lastName[i].toUpperCase()){
        isName = true;
    }
    i++;
}



if(isName){
    lastName.sort();
    document.getElementById('display').innerHTML = lastName;
    
} 


