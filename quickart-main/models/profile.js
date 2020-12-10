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
    email: {
        type: String
        // required: true,
        // unique: true
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
    postings: [
        {
            postedBy: {
                type: mongoose.Schema.Types.ObjectId
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
                required: true
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
                type: String,
                // required: true
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
            ]
            // sellerinfo: {
            //     type: String,
            //     required: true
            // },
        }
    ]
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
