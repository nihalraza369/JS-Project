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
  
    // Show user message
    const userMsg = createMessage(text, "user");
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // System reply 1
    setTimeout(() => {
      const botMsg1 = createMessage(`Tumne yeh bola: ${text}`, "bot");
      chatBox.appendChild(botMsg1);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
  
    // System reply 2
    setTimeout(() => {
      const botMsg2 = createMessage(`Main bhi yeh kehna chahta hoon: ${text}`, "bot");
      chatBox.appendChild(botMsg2);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1300);
  
    input.value = "";
  }
  