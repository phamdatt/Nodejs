const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('chat-message');
const socket = io();
socket.on('message', message => {
    console.log(message);
    outputMessage(message);
})
//Message submit 
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage', msg);
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
})

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML =
        `<p class="text">
           ${message}
        </p>`;
    document.querySelector('.chat-message').appendChild(div);
}