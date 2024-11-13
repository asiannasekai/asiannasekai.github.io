// script.js

const output = document.getElementById("output");
const inputField = document.getElementById("inputField");

let messages = [
    "Welcome to Asianna's website.",
    "What brings you here?",
    "Type your answer and press Enter to continue..."
];
let currentMessageIndex = 0;

function displayMessage() {
    if (currentMessageIndex < messages.length) {
        output.innerHTML += `<p>${messages[currentMessageIndex]}</p>`;
        currentMessageIndex++;
        output.scrollTop = output.scrollHeight;
    }
}

displayMessage();

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const userInput = inputField.value.trim();
        if (userInput) {
            output.innerHTML += `<p>> ${userInput}</p>`;
            inputField.value = "";
            generateResponse(userInput);
            output.scrollTop = output.scrollHeight;
        }
    }
});

function generateResponse(input) {
    if (input.toLowerCase().includes("portfolio")) {
        output.innerHTML += `<p>Loading portfolio section...</p>`;
    } else if (input.toLowerCase().includes("contact")) {
        output.innerHTML += `<p>Opening contact details...</p>`;
    } else {
        output.innerHTML += `<p>I didn’t quite get that. Try "portfolio" or "contact".</p>`;
    }
    displayMessage();
}



