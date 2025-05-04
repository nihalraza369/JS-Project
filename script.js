function sendMessage() {
    const input = document.getElementById("messageInput");
    const messagesDiv = document.getElementById("messages");
  
    if (input.value.trim() === "") return;
  
    const newMsg = document.createElement("div");
    newMsg.textContent = "You: " + input.value;
    messagesDiv.appendChild(newMsg);
  
    input.value = "";
  }
  