function indications(...directions){
    for(let direct of directions){
        if (direct === `su` || direct === `giù` || direct === `sinistra` || direct === `destra`){
            console.log(direct);
        } else {
            console.log(`${direct} non è una direzione valida`);
        }
    }
}
indications(`su`, `giù`, `destra`)


//seconda parte
function contaIndicazioni(...directions) {
    const counts = { su: 0, giù: 0, sinistra: 0, destra: 0 };

    for (let i = 0; i < directions.length; i++) {
        counts[directions[i]]++;
    }

    return counts;
}

const result = contaIndicazioni('su', 'su', 'sinistra', 'destra', 'destra', 'giù', 'giù', 'giù');
console.log(result);


//terza parte
let count = 0;

const countClick = () => {
    count++;
    console.log(`click -> ${count}`);
};

document.body.addEventListener('click', countClick);
