// Zadatak 1: Koristeći for petlju ispisati sve neparne brojeve od 1 do 10

var myArray = [];

for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
}

console.log(myArray);

// Zadatak 2: Sa sljedećeg linka preuzmite HTML datoteku te napišite Javascript kod koji će ispisati broj karaktera koji se nalaze u paragrafu “mojParagraf”

const p = document.getElementById('mojParagraf');
let brojKaraktera = p.innerText.length;
console.log(brojKaraktera);

// Zadatak 3: Napravite funkciju koja se zove kalkulator i prima 3 parametra: prviBroj, drugiBroj, operator. Ako je prosljeđen jedan od sljedeća četiri operatora ‘+’, ‘-’, ‘/’ ili ‘*’ funkcija treba vratiti rezultat na način da će odraditi onu operaciju koja je proslijeđena nad brojevima prviBroj i drugiBroj.
// U slučaju da je kao zadnji parametar proslijeđeno nešto drugo osim navedenih operatora potrebno je vratiti null vrijednost.

function kalkulator(prviBroj, drugiBroj, operator) {
    if (!prviBroj || !drugiBroj) {
        return "Invalid number"
    }
    if (!['*', '-', '/', '+'].includes(operator)) {
        return "Invalid operator"
    }
    switch (operator) {
        case "+":
            return prviBroj + drugiBroj;
        case "/":
            return prviBroj * drugiBroj;
        case "*":
            return prviBroj * drugiBroj;
        case "-":
            return prviBroj - drugiBroj;
    }
}
console.log(kalkulator(5, 6, "+"))

// Zadatak 4: Napraviti funkciju koja prima dva parametra: niz i trazeniElement. Funkcija treba vratiti boolean vrijednost odnosno true ili false ovisno o tome da li se trazeniElement nalazi u prosljeđenom nizu.
let niz = [1, 2, 3];
let trazeniElement = niz.includes(3);
console.log(trazeniElement);

// Zadatak 5: Napraviti funkciju koja prima dva parametra keys i values. Funkcija treba vratiti objekt koji će imati sve atribute iz niza keys kojima su pridružene vrijednosti one iz niza values. Ako parametri keys i values nisu nizovi ili ako ne sadrže isti broj elemenata vratiti prazan objekt.  

var keys = ['foo', 'bar', 'baz'];
var values = [11, 22, 33]

var result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);