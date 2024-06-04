const resetBtn = document.querySelector('#resetBtn');
const clickBtn = document.querySelector('#clickBtn');

resetBtn.onclick = function() {
    clickBtn.innerHTML = "0";
};

clickBtn.onclick = function() {
    let currentValue = Number(clickBtn.innerHTML) || 0;
    clickBtn.innerHTML = currentValue + 1;
};
