const counter = document.querySelector(".counter");
const button = document.querySelectorAll(".button");

Array.from(button).forEach(element => {
    element.addEventListener("click", function klick(event) {
        let content = counter.innerText.split(':');
        let number = parseInt(content[1]);

       switch (event.target.innerText) {
            case "Klick!":
                number++;
                break;
            case "Reset!":
                number = 0;
                break;
        }
    counter.textContent = "Anzahl Klicks: " +number;
    });

});