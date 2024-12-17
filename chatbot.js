// Toggle chatbot visibility (show/hide chat window)
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

// Handle sending messages
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user-message';
        userMessageElement.textContent = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Display bot response
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot-message';
        botMessageElement.textContent = getBotReply(userMessage);
        chatMessages.appendChild(botMessageElement);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        userInput.value = '';
    }
}

// Default bot replies
function getBotReply(message) {
    const defaultReplies = {
        hello: "Hello! How can I assist you today?",
        hi: "Hi there! What can I do for you?",
        help: "Sure! Please let me know what you need help with.",
        default: "Sorry, I didn't understand that. Can you try again?",
        plants: "Plants are amazing! Which plant would you like to know about?",
        nutrients: "Nutrients are essential for plant growth. I can help you identify the nutrients your plants need.",
        soil: "Healthy soil is vital for healthy plants. Do you want tips on soil improvement?",
        sunlight: "Most plants need sunlight to thrive. Are you asking about a specific plant's light requirements?",
        yellowLeaves: "Yellow leaves might indicate a nitrogen deficiency. You can add compost or fertilizer rich in nitrogen.",
        brownSpots: "Brown spots on leaves can indicate a potassium deficiency or disease. Ensure proper watering and soil nutrients.",
        stuntedGrowth: "Stunted growth may result from a lack of phosphorus. Consider adding bone meal or phosphate fertilizer.",
        fertilizer: "Organic compost, manure, or store-bought fertilizers can improve plant health. Do you want recommendations for a specific plant?",
        organic: "Organic fertilizers like compost, bone meal, or fish emulsion are eco-friendly and effective!",
        chemical: "Chemical fertilizers deliver quick results but should be used sparingly to avoid over-fertilization.",
        watering: "Watering needs depend on the plant. Overwatering or underwatering can harm them. Need specific advice?",
        overwatering: "Overwatering can lead to root rot. Allow the soil to dry before watering again.",
        underwatering: "Underwatering causes wilting. Ensure consistent watering based on your plant's needs.",
        pests: "Pests like aphids or caterpillars can damage plants. Neem oil or natural predators like ladybugs can help.",
        fungus: "Fungal infections may require fungicides or better air circulation around your plants.",
        leavesFalling: "Leaves falling off can be due to stress, overwatering, or nutrient deficiency. Let's investigate further.",
        contact: "You can contact us at contact@yourwebsite.com or use the contact form on our website!",
        location: "We are based in [Your Location]. Do you want directions or online help?",
        recommendations: "Tell me about your plant, and I can recommend care tips or nutrients it needs!",
        jokes: "Why did the tomato blush? Because it saw the salad dressing! 😂",
        funFact: "Did you know? Banana plants are technically herbs, not trees!",
        thankYou: "You're welcome! Let me know if there's anything else I can help you with.",
        
    };

    const lowerMessage = message.toLowerCase();
    return defaultReplies[lowerMessage] || defaultReplies.default;
}

// Function to clear chat messages
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = ''; // Clears all the messages
}
