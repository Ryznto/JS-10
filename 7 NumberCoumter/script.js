const count = document.querySelector ("#counter")
const plus = document.querySelector ("#plus")
const minus = document.querySelector ("#minus")
const reset = document.querySelector ("#reset")

plus.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) + 1
})

minus.addEventListener("click", () => {
    // count.textContent = parseInt(count.textContent) - 1
    if (parseInt(count.textContent) > 0) {
        count.textContent = parseInt(count.textContent) - 1;
    }
})

reset.addEventListener("click", () => {
    count.textContent = "0"
})