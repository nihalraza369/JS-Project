function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chat-box");
  
    const msg = input.value.trim();
    if (msg === "") return;
  
    // Show user message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = msg;
    chatBox.appendChild(userMsg);
  
    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Fake system reply with same message
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "message bot";
      botMsg.textContent = msg;
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  
    input.value = "";
  }
  