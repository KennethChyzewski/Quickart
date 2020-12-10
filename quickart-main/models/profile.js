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
    
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
