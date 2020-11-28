//NEED TO FIX THIS
const JWT = 'supersecrettoken';
const jsonwebtoken = require('jsonwebtoken');

const authUser = function(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No token, autherization denied' });
    }

    //Salt and hash token
    try {
        const decoded = jsonwebtoken.verify(token, JWT);
        //Take request object and assign value to user
        req.user = decoded.user;
        next();
    } catch(error) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};

module.exports = authUser;
