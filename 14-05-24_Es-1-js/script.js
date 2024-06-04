let phrase1 = "Ciao Mondo!";

let phrase2 = `Mio zio viene dalla città dell'Aquila`;

let phrase3 = `
${phrase1}

${phrase2} `;

console.log(phrase3);

let phraseMaiusc = phrase3.toUpperCase();

console.log(phraseMaiusc);

let userValue = prompt( `Inserisci il numero del tuo ordine`, `1234567890`);

console.log(userValue);

console.log(userValue.toLowerCase());

let InsertNumber = prompt(`Inserisci un numero da 1 a 10`);

if(Number(InsertNumber) > 7) {
    console.log (`Hai vinto!`);
} else if (Number(InsertNumber) <= 7) {
    console.log (`Ritenta!`);
}

 