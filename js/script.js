// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente sia in console che in pagina
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 


// INITIAL VARIABLES
var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var userName

userName =
    prompt('inserisci il tuo cognome').trim();
    lastName.push(userName.charAt(0).toUpperCase() + userName.slice(1));

// VALIDATION

var isName = false;

var i = 0;
while(i < lastName.length && !isName){
    if(userName){
        isName = true;
    }
    i++;
}


if(isName){
    lastName.sort();
}

var listName = '';

var i = 0; 
while(i < lastName.length){
    listName += '<li>' + lastName[i] + '</li>';
    i++;
}


// PRINT LIST AND MESSAGE
document.getElementById('list').innerHTML = listName.charAt(0).toUpperCase() + listName.slice(1);

lastName = listName;

var message = 'il tuo cognome è nella posizione: ';


document.getElementById('display').innerHTML = message + lastName.indexOf(userName);
