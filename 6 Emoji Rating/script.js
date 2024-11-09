document.addEventListener("DOMContentLoaded", function () {
    let emojiElement = document.getElementById("emoji");
    let starElements = document.querySelectorAll(".fa-solid.fa-star");

    let defaultEmoji = "😐";

    starElements.forEach(function (star, index) {
        star.addEventListener("click", function () {
            if (star.style.color === "gold") {
                star.style.color = "";
                emojiElement.innerText = defaultEmoji;
            } else {
                star.style.color = "gold";
                switch (index) {
                    case 0:
                        emojiElement.innerText = "😠";
                        break;
                    case 1:
                        emojiElement.innerText = "😕";
                        break;
                    case 2:
                        emojiElement.innerText = "😐";
                        break;
                    case 3:
                        emojiElement.innerText = "😊";
                        break;
                    case 4:
                        emojiElement.innerText = "😍";
                        break;
                    default:
                        break;
                }
            }
        });
    });
});