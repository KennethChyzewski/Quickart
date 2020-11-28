const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    dateSent: {
        type: Date,
        default: Date.now
        //required: true
    },
    liked: {
        type: Boolean,
        required: true
    }
})

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
