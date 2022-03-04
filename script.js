const span = document.querySelector('span');
const colors = ['red', 'blue', 'yellow', 'green', 'white', 'brown', 'magenta']
const clickMe = document.querySelector('#click-me')
const bottomContainer = document.querySelector('.bottom-container')
let counter = 0;

clickMe.addEventListener('click', function() {

    if(counter < colors.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    
    span.innerText = colors[counter];
    bottomContainer.style.background = colors[counter];

   
});
