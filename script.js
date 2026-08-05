function sendMessage() {

    let userText = document.getElementById("user-input").value;

    let echoText = document.getElementById("echo-message");

    if (userText === "") {
        echoText.innerHTML = "Ask me something! 😊";
    } 
    else {
        echoText.innerHTML =
        "You said: " + userText +
        "<br><br>I'm Echo! My full AI brain is coming soon 🤖✨";
    }

}
