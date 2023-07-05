const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            const kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
