function logThis() {
    console.log(this);
}

document.getElementById('Button').addEventListener('click', function(event) {
    logThis.call(event.target); // Logga il contesto di event.target
});
