const search = document.querySelector("#search")
const typingStatus = document.querySelector("#status")
const ball = document.querySelector("#ball");

let ballPosition;


// search.addEventListener("keyup", (event) => {

//     ballPosition = getComputedStyle(ball).transform.replace("matrix(", "").replace(")", "")

//     if (!ballPosition.includes("none")) {
//         ballPosition = getComputedStyle(ball).transform.replace("matrix(", "").replace(")", "").split(',').at(-1)
//         console.log(ballPosition)
//     }

//     clearTimeout(timeoutId)
//     typingStatus.textContent = "Typing..."
//     ball.classList.add("bouncing")

//     timeoutId = setTimeout(thisWillRun, 500);
// })



function thisWillRun(msg, event) {

    typingStatus.textContent = msg + ' ' + event.target.value;

    ball.classList.remove("bouncing")
}


function debounce (callback, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            callback.call(this, ...args)

        }, delay);
    }

}

const debouncedFn = debounce(thisWillRun, 500)

search.addEventListener("keyup", (event) => debouncedFn("Typed:", event))
