let numeri = [-1, -2, -10, 2, 5];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 0) {
        console.log(numeri[i]);
    }
}

console.log('---');

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 0) {
        console.log(numeri[i]);
        break;
    }
}


//seconda parte
let parola = prompt("Inserisci una parola:");
let arrayCaratteri = parola.split('');
let lunghezza = arrayCaratteri.length;
let ePalindromo = true;

for (let i = 0; i < lunghezza / 2; i++) {
    if (arrayCaratteri[i] !== arrayCaratteri[lunghezza - i - 1]) {
        console.log("Non è un palindromo.");
        ePalindromo = false;
        break;
    }
}

if (ePalindromo) {
    console.log("Successo! È un palindromo!");
}
