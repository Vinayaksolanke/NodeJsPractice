const ChatRoom =  require("./ChatRoom.js");
const chat = new ChatRoom

chat.on("join", (user) => {
    console.log(`${user} has joined the chat.`);
});


chat.on("sendMessage", (user) => {
    console.log(`${user} has joined the chat.`);
});


chat.on("leave", (user) => {
    console.log(`${user} has joined the chat.`);
});

chat.join("Alice"); 
chat.join("Bob");
chat.sendMessage("Alice", "Hello, Bob!");
chat.leave("Bob");(["Alice", "Bob"]);   