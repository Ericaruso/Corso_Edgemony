let score = 0;

let answer1 = prompt(`Qual è la capitale dell'Italia?: Roma, Milano, Catania, Firenze`);
let answer2 = prompt(`Chi scrisse i Promessi Sposi?: Manzoni, Dante, Omero`);
let answer3 = prompt(`Qual è la radice quadrata del numero 144?: 12, 24, 48`);
let answer4 = prompt(`Quando entrò l'Italia in guerra nella Prima Guerra Mondiale?: 1915, 1914, 1916`);

answer1 = answer1.toLowerCase().trim();
answer2 = answer2.toLowerCase().trim();
answer3 = answer3.toLowerCase().trim();
answer4 = answer4.toLowerCase().trim();

switch (answer1) {
    case `roma`:
        score += 3;
        break;
    case `milano`:
    case `catania`:
    case `firenze`:
        default:
            score -= 1;
            break;
}

switch (answer2) {
    case `manzoni`:
    case `alessandro manzoni`:
        score += 3;
        break;
    case `dante`:
    case `omero`:
        default:
            score -= 1;
            break;
}

switch (answer3) {
    case `12`:
        score += 3;
        break;
    case `24`:
    case `48`:
        default:
            score -= 1;
            break;
}

switch (answer4) {
    case `1915`:
        score += 3;
        break;
    case `1914`:
    case `1916`:
        default:
            score -= 1;
            break;
}

alert (`Il tuo punteggio è ${score}`);
if (score === 12){alert (`Complimenti! Hai vinto!`)};
if (score < 12){alert (`Ritenta, devi studiare di più...`)};


// seconda parte
let vowels = `aeiou`;

let word1 = prompt(`Scrivi una parola!`);
let isVowel = vowels.includes(word1[0]);
let result = (isVowel) ? `vocale` : `consonante`;
console.log(result);

let word2 = prompt(`Scrivi una parola!`);
isVowel = vowels.includes(word2[0]);
result = (isVowel) ? `vocale` : `consonante`;
console.log(result);

let word3 = prompt(`Scrivi una parola!`);
isVowel = vowels.includes(word3[0]);
result = (isVowel) ? `vocale` : `consonante`;
console.log(result);


//terza parte
const string = `erica`;
console.log(string);

const stringSplit = string.split(``);
console.log(stringSplit);

const reverseString = stringSplit.reverse();
console.log(reverseString);
