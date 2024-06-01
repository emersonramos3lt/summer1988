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
})

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