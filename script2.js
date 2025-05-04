function getTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ":" +
           now.getMinutes().toString().padStart(2, '0');
  }
  
  function createMessage(text, sender) {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
  
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = text;
  
    const time = document.createElement("div");
    time.className = "timestamp";
    time.textContent = getTime();
  
    bubble.appendChild(time);
    message.appendChild(bubble);
  
    return message;
  }
  
  function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chat-box");
    const text = input.value.trim();
  
    if (text === "") return;
  
    // User Message
    const userMsg = createMessage(text, "user");
    chatBox.appendChild(userMsg);
  
    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Bot Reply (Same)
    setTimeout(() => {
      const botMsg = createMessage(text, "bot");
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
  
    input.value = "";
  }
  