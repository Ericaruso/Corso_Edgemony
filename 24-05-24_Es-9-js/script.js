const nuovoH1 = document.createElement('h1');
nuovoH1.textContent = 'Sono un titolo!';

const nuovoParagrafo = document.createElement('p');
nuovoParagrafo.textContent = 'Sono un paragrafo!';

const container = document.getElementById('container');

container.insertAdjacentElement('afterbegin', nuovoH1);
container.append(nuovoParagrafo);


//seconda parte
const button = document.createElement('button');
button.textContent = '0';


nuovoParagrafo.insertAdjacentElement('afterend', button);


button.onmouseenter = function() {
    button.style.backgroundColor = 'lightblue';
    button.style.color = 'white';
    button.style.fontSize = '20px';
};


button.onclick = function() {
    button.textContent = parseInt(button.textContent) + 1;
};


//terza parte
const formEl = document.querySelector('form');
const inputEl = document.getElementById('nomi');
const listEl = document.querySelector('.list');

formEl.onsubmit = function(event) {
    event.preventDefault();

    const inputValue = inputEl.value.trim();

    if (inputValue.includes(' ') && inputValue.length >= 3) {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listEl.appendChild(listItem);

        listItem.onclick = function() {
            console.log(inputValue);
        };

        inputEl.value = '';
    }
};
