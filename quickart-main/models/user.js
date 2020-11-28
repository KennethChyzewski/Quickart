const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    accType: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

// const ReservationSchema = new mongoose.Schema({
//     time: String,
//     people: Number
// });

// // Reservations will be embedded in the Restaurant model
// const RestaurantSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     reservations: [ReservationSchema]
// });

// const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

// module.exports = { Restaurant };
