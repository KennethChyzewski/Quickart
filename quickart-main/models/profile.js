const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    //associate with userSchema
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String
        // required: true
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
    },
    postings: {
        type: [String]
        //posts: [PostSchema]
    },
    // postings: [
    //     {
    //         title: {
    //             type: String,
    //             required: true
    //         },
    //         price: {
    //             type: String,
    //             required: true
    //         },
    //         date: {
    //             type: Date,
    //             required: true
    //         },
    //         description: {
    //             type: String,
    //             required: true
    //         },
    //         delivery: {
    //             type: String,
    //             required: true
    //         },
    //         pictures: {
    //             type: String,
    //             required: true
    //         },
    //         // sellerinfo: {
    //         //     type: String,
    //         //     required: true
    //         // },
    //     }
    // ]
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
