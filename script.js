function sendMessage() {

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let userText = input.value;

    if (userText === "") {
        return;
    }


    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userText;

    chatBox.appendChild(userMessage);


    let echoMessage = document.createElement("div");
    echoMessage.className = "echo-message";
    echoMessage.textContent = "I'm Echo! 🤖 I received your message. My full AI brain is coming soon!";

    chatBox.appendChild(echoMessage);


    input.value = "";

}
