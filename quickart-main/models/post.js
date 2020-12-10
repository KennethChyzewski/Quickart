const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    postEndDate: {
        type: Date,
        default: Date.now
        //required: true
    },
    pickUpOptions: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pictures: {
        type: String
        //required: true
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    dislikes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],

    //Seller information, taken from Profile schema
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    location: {
        type: String
    },
    biography: {
        type: String
    },
    niche: {
        type: String
    },
    tags: {
        type: [String]
    }
})

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
