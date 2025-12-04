const search = document.querySelector("#search")
const typingStatus = document.querySelector("#status")
const ball = document.querySelector("#ball");

// Random fluff, not a part of debounce solution
let ballPosition;
function animateBall() {
    ballPosition = getComputedStyle(ball).transform.replace("matrix(", "").replace(")", "")

    ball.classList.add("bouncing")
}


function thisWillRun(msg, event) {
    typingStatus.textContent = msg + ' ' + event.target.value;
    ball.classList.remove("bouncing")
}


function debounce (callback, delay) {
    let timeoutId;

    return function(...args) {
        animateBall()
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            callback.call(this, ...args)

        }, delay);
    }

}

const debouncedFn = debounce(thisWillRun, 500)

search.addEventListener("keyup", (event) => debouncedFn("Typed:", event))
