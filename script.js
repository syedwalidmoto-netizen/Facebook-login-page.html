function login() {

    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Demo account
    let correctNumber = "01712345678";
    let correctPassword = "123456";

    if (number === correctNumber && password === correctPassword) {

        // Login successful
        window.location.href = "home.html";

    } else {

        message.innerText = "Number অথবা Password ভুল!";
    }
}