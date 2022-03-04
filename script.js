const span = document.querySelector('span');
const colors = ['red', 'blue', 'yellow', 'green', 'white', 'brown', 'magenta'];
const clickMe = document.querySelector('#click-me');
const bottomContainer = document.querySelector('.bottom-container');
let counter = 0;

const randomHex = document.querySelector('#random-hex');
const button = document.querySelector('#random-hex button');

const colorFlipper = document.querySelector('#color-flipper');
const firstButton = document.querySelector('#color-flipper button')

const buttons = document.querySelectorAll('.top-container button');
console.log(typeof buttons);

let activeType = "simple"

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove("active"))
        btn.classList.add("active")
        activeType = btn.dataset.type;
        clickMeAction();
    })
})



// randomHex.addEventListener('click', function() {
//     button.classList.add('active');
//     firstButton.classList.remove('active');

// });

// colorFlipper.addEventListener('click', function() {
//     firstButton.classList.add('active');
//     button.classList.remove('active');
// });

 function clickMeAction(){

    // clickMe.addEventListener('click', function() {

        if (activeType == "simple") {
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

    // });

};

clickMe.addEventListener('click', function() {
    clickMeAction();
})

