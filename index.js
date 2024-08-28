// COUNTER

document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    let count = 0;

    function updateCounter() {
        counter.textContent = count;
        count += 200;

        if(count > 218000) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(updateCounter, 1);
});












/* TEXT ANIMATION INDEX PAGE */
const text = document.querySelector(".name");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span class='span'>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char == splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}







// APPEAR ANIMATION 
const main = document.querySelectorAll("main");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .2
}

const callbacks = (entries) => {
    entries.forEach(element => {
        if(element.isIntersecting) {
            element.target.classList.add('active'); // ADD ACTIVE
        }
    });
}

let observer = new IntersectionObserver(callbacks, options);
main.forEach(element => {
    observer.observe(element)
});