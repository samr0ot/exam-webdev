// Q1. FETCH API

const albumList = document.getElementById("albumList");
fetch("https://jsonplaceholder.typicode.com/albums")
    .then(function(response) {
        return response.json();

    })
    .then(function(albums) {
        albumList.innerHTML = "";
        for (let i = 0; i < 15; i++) {
            const li = document.createElement("li");
            li.textContent = albums[i].title;
            albumList.appendChild(li);
        }

    })

    .catch(function(error) {
        albumList.innerHTML = "<li>Failed to load albums.</li>";
        console.log(error);

    });

// Q2. PYRAMID PATTERN

function printPyramid() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= (2 * i - 1); j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    document.getElementById("pyramid").textContent = pattern;
}
printPyramid();

// Q3. PAYMENT SIMULATION

const payButton = document.getElementById("payButton");
const paymentMessage = document.getElementById("paymentMessage");
function processPayment() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Payment Successful!");

        }, 2000);
    });
}
payButton.addEventListener("click", function() {
    paymentMessage.textContent = "Processing payment...";
    processPayment()

        .then(function(message) {

            paymentMessage.textContent = message;

            payButton.disabled = true;

        });

});