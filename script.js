const span = document.querySelector('span');
const colors = ['red', 'blue', 'yellow', 'green', 'white', 'brown', 'magenta'];
const clickMe = document.querySelector('#click-me');
const bottomContainer = document.querySelector('.bottom-container');
let counter = 0;

const randomHex = document.querySelector('#random-hex');
const button = document.querySelector('#random-hex button');

const colorFlipper = document.querySelector('#color-flipper');
const firstButton = document.querySelector('#color-flipper button')


randomHex.addEventListener('click', function() {
    button.classList.add('active');
    firstButton.classList.remove('active');

});

colorFlipper.addEventListener('click', function() {
    firstButton.classList.add('active');
    button.classList.remove('active');
});

clickMe.addEventListener('click', function() {

    if (firstButton.classList.contains('active')) {
        if(counter < colors.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
        
        span.innerHTML = colors[counter];
        bottomContainer.style.background = colors[counter];
    } else {
        const setBg = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            bottomContainer.style.backgroundColor = "#" + randomColor;
            span.innerHTML = "#" + randomColor;
          }
          
          setBg();
    };

});
