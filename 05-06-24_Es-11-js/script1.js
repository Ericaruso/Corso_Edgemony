
const parentDiv = document.getElementById('parent-div');


parentDiv.addEventListener('click', function(event) {

    if (event.target.id === 'button1') {
        console.log('Hai cliccato il Bottone 1!');
    } else if (event.target.id === 'button2') {
        console.log('Hai cliccato il Bottone 2!');
    } else if (event.target.id === 'button3') {
        console.log('Hai cliccato il Bottone 3!');
    }
});
