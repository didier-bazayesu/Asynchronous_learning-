// chat.js
const EventEmitter = require('events');
// here you can also use "import { EventEmitter } from "events";"
const chat = new EventEmitter();

// Listener for incoming messages
chat.on('message', (user,msg) => {
    console.log(`${user}: ${msg}`);
});

// Send messages asynchronously
function sendMessage(user, msg,delay) {
    setTimeout(() => {
        chat.emit('message',user, msg);
    }, delay);
}

// Starter messages
sendMessage("didier","Hello!", 1000);
sendMessage("rukundo","How are you?", 2000);
sendMessage("kagarara","This is async chat.", 1500);

