const search = document.querySelector("#search")

function thisWillRun() {
    console.log("finished typing")
}

let timeoutId;

search.addEventListener("keyup", (event) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(thisWillRun, 500);
})
