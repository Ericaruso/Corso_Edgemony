const headingEl = document.querySelector('#heading');
console.log(headingEl.outerHTML);

const buttonEls = document.querySelectorAll('button');
buttonEls.forEach(button => {
    console.log(button.textContent);
});
