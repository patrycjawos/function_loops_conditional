/* Napisz funkcję „displayName”, która przyjmuje dwa argumenty, 
* imię i nazwisko, i wyświetla je w powitaniu w stylu Jamesa Bonda.
* Spójrz na przypadki testowe, aby zrozumieć jego zasadę działania. 
* Twoja funkcja musi działać tak samo!
* Wskazówka: kiedy mówimy o *wyświetlaniu*, musisz użyć polecenia „console.log”.
*/

// Rozwiązanie
function displayName(name, surname){
    let result = `My name is ${surname}, ${name} ${surname}`
    return result
} 
module.exports = displayName;


/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayName('James','Bond'), 'My name is Bond, James Bond');
verify(displayName('Ada', 'Lovelace'), 'My name is Lovelace, Ada Lovelace');



