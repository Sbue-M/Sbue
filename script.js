// JS code for the chatbot

// Common chat replies
const commonReplies = [
    { input: 'developer', reply: 'Sibusiso Mkhize' },
    // Add more entries with meaningful input and replies

];

// Function to find a matching reply
function findReply(message) {
    message = message.toLowerCase();

    for (let i = 0; i < commonReplies.length; i++) {
        const commonInput = commonReplies[i].input.toLowerCase();

        if (message.includes(commonInput)) {
            return commonReplies[i].reply;
        }
    }
    return "I'm sorry, I don't understand. Can you please rephrase your message?";
}

// Function to add a user message to the chat log
function addUserMessage(message) {
    const chatLog = document.getElementById('chatLog');
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.innerHTML = `<p>${message}</p>`;
    chatLog.appendChild(userMessage);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to add a bot message to the chat log
function addBotMessage(message) {
    const chatLog = document.getElementById('chatLog');
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.innerHTML = `<p>${message}</p>`;
    chatLog.appendChild(botMessage);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message !== '') {
        addUserMessage(message);
        userInput.value = '';

        const reply = findReply(message);
        setTimeout(() => {
            addBotMessage(reply);
        }, 500); // Simulate bot typing delay

        userInput.focus();
    }
}

// Event listener for send button click
document.getElementById('sendBtn').addEventListener('click', handleUserInput);

// Event listener for enter key press
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
