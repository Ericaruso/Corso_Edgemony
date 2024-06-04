const coder = {
    firstName: 'Luca',
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

coder.skills.forEach(skill => console.log(skill));



// seconda parte
const country = prompt('Inserisci il paese:');
const street = prompt('Inserisci la strada:');

coder.address.country = country;
coder.address.street = street;

console.log(coder.address);

Object.keys(coder).forEach(key => console.log(key));



// terza parte
const vowels = ['a', 'e', 'i', 'o', 'u'];

Object.keys(coder).forEach(key => {
    if (vowels.includes(key[0].toLowerCase())) {
        console.log(`${key}: ${coder[key]}`);
    }
});

//quarta parte
const key = prompt('Quale chiave vuoi aggiungere?');
const value = prompt('Quale valore vuoi assegnare a questa chiave?');

coder[key] = value;

console.log(coder);