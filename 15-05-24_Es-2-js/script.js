let UserName = prompt (`Inserisci il tuo nome..`);
if (UserName == ``) {
    alert(`Non hai inserito nessun nome!`);
    window.location.reload();
} else if (UserName.length < 3) {
    alert (`Il nome deve essere più lungo di 3 lettere!`);
    window.location.reload();
} 


let UserSurname = prompt (`Inserisci il tuo cognome..`);
 if (UserSurname == ``) {
    alert (`Non hai inserito nessun cognome!`);
    window.location.reload();
} else if (UserSurname.length < 3) {
    alert(`Il cognome deve essere più lungo di 3 lettere!`)
    window.location.reload();
}

let firstLetterCapitalize = UserName.charAt(0).toUpperCase();
console.log(firstLetterCapitalize);

let nameWithoutFirstLetter = UserName.slice(1);

let nameCapitalize = firstLetterCapitalize + nameWithoutFirstLetter;

let firstLetterCapSurname = UserSurname.charAt(0).toUpperCase();
console.log (firstLetterCapSurname);

let surnameWithoutFirstletter = UserSurname.slice(1);

let surnameCapitalize = firstLetterCapSurname + surnameWithoutFirstletter;

alert (`Ciao! ${nameCapitalize} ${surnameCapitalize}`);



//seconda parte


let score = 0;

let answer1 = prompt(`Qual è la capitale dell'Italia?`);
let answer2 = prompt(`Chi scrisse i Promessi Sposi?`);
let answer3 = prompt(`Qual è la radice quadrata del numero 144?`);
let answer4 = prompt(`Quando entrò l'Italia in guerra nella Prima Guerra Mondiale?`);

answer1 = answer1.toLowerCase().trim();
answer2 = answer2.toLowerCase().trim();
answer3 = answer3.toLowerCase().trim();
answer4 = answer4.toLowerCase().trim();

switch (answer1) {
    case `roma`:
        score += 3;
        break;

        default:
            score -= 1;
            break;
}

switch (answer2) {
    case `manzoni`:
    case `alessandro manzoni`:
        score += 3;
        break;

        default:
            score -= 1;
            break;
}

switch (answer3) {
    case `12`:
        score += 3;
        break;

        default:
            score -= 1;
            break;
}

switch (answer4) {
    case `1915`:
        score += 3;
        break;

        default:
            score -= 1;
            break;
}

alert (`Il tuo punteggio è ${score}`);
if (score === 12){alert (`Complimenti! Hai vinto!`)};
if (score < 12){alert (`Ritenta, devi studiare di più...`)};
