const EventEmitter = require('events')

class ChatRoom extends EventEmitter {
    constructor(users) {
        super()
            this.users= new Set(users)
        
    }

    join(user){
        this.users.add(user)
        this.emit(`${user}`, user);
    }

    sendMessage(user, message){
        if(this.users.has(user)){
            this.emit('message', {user, message});
        } else {
            throw new Error('User not in chat room');
        }                   
    }

    leave(user){
        this.users.delete(user);
        this.emit('leave', user);
    }   
}

module.exports = ChatRoom;      