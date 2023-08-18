import savedChats from "/data/savedChats.json" assert {type: "json"};

let sidebarChatContainer = undefined;

class ChatButton {
    constructor(chatInfo) {
        var container = document.createElement("div")
        container.className = "chat_button_container";

        var button = document.createElement("button");
        button.className = "chat_button";
        button.textContent = chatInfo.Name;

        var closeButton = document.createElement("button");
        closeButton.className = "chat_close_button";
        closeButton.textContent = "x";

        button.addEventListener("click", () => this.onClick());
        closeButton.addEventListener("click", () => this.close());

        container.appendChild(button);
        container.appendChild(closeButton);
        sidebarChatContainer.insertBefore(container, sidebarChatContainer.firstElement);

        this.chatInfo = chatInfo;
        this.button = button;
    }

    onClick() {
        console.log("Clicked " + this.chatInfo.Name);
    }

    close() {
        console.log("Tried to close " + this.chatInfo.Name);
    }
}

class NewChatButton {
    constructor() {
        this.button = document.querySelector("#new-chat-button");

        this.button.addEventListener("click", () => this.onClick());
    }

    onClick() {
        console.log("tired to create a new chat!");
    }
}


class SaveButton {
    constructor() {
        this.button = document.querySelector("#save-button");

        this.button.addEventListener("click", () => this.onClick());
    }

    onClick() {
        console.log("tired to save!");
    }
}


function loadAllMessages() {
    console.log(savedChats);

    // for (const [key, value] of Object.entries(savedChats)) 
    //     new ChatButton(value);
}

// Function to create buttons in the sidebar
function startApp() {
    sidebarChatContainer = document.querySelector(".sidebar__chats_container");

    new SaveButton();
    new NewChatButton();

    loadAllMessages();
}

// Call the function to create buttons when the DOM is loaded
document.addEventListener('DOMContentLoaded', startApp);
