const board = document.querySelector('#board');
const colors = ['red', '#e74c3c', 'green', '#e67e22', 'blue', '#2ecc71', 'white', 'purple', 'yellow', 'green', '#72fc01',
'#0105fc', '#a217ff', '#10fabf', '#fc01bd', '#fcac01', '#1ca8f8', '#2f01fc', '#a0226c', '#4a7e61'];
const SQUARES_NUMBER = 2040;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseover', () =>
    setColor(square));

    // square.addEventListener('mouseleave', removeColor);
    square.addEventListener('mouseleave', () =>
    removeColor(square));

    board.append(square);
};

function setColor(el) {
    // function setColor(event) { 
    // const el = event.target;
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(el) {
    // function removeColor(event) {
    // const el = event.target;
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`
};

function getRandomColor() {
    // const index = Math.floor(Math.random() * colors.length);
    // return colors[index]
    return colors[Math.floor(Math.random() * colors.length)];
};