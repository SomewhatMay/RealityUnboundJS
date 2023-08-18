// Array of strings
const stringArray = {
    Chat1: {
        Name: "Chat1",
        Saved: Date.now(),
        Messages: [
            {
                role: "user",
                content: "some message"
            }
        ]
    },

    "An epic tale": {
        Name: "An epic tale",
        Messages: [
            {
                role: "system",
                content: "you are a person",
            },
            {
                role: "assistant",
                content: "Welcome to an Epic Tale named \"Epic Tale\"! Let's begin."
            },
            {
                role: "user",
                content: "I want to fly"
            },
        ]
    },
}

// Function to handle button clicks
function handleButtonClick(string) {
    console.log("Clicked: " + string);
}

class ChatButton {
    Button(chatInfo) {

    }

    onClick() {
        console.log("Clicked" + this.name);
    }
}

// Function to create buttons in the sidebar
function createButtons() {
    const sidebar = document.querySelector('.sidebar');
    
    stringArray.forEach(string => {
        const button = document.createElement('button');
        button.className = 'chat_button';
        button.textContent = string;
        
        button.addEventListener('click', () => handleButtonClick(string));
        
        sidebar.appendChild(button);
    });
}

// Call the function to create buttons when the DOM is loaded
document.addEventListener('DOMContentLoaded', createButtons);
