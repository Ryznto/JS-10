const textarea = document.querySelector("#textarea");
const count = document.querySelector("#count");
const remaining = document.querySelector("#remaining");

textarea.addEventListener('input', () => {
    updateCounter();
});

function updateCounter() {
    const maxLength = textarea.getAttribute("maxlength");
    const currentLength = textarea.value.length;

    count.innerText = currentLength;
    remaining.innerText = maxLength - currentLength;
}

updateCounter();
