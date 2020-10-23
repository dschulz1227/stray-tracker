const User = require('../models/user');
const express = require('express');
const router = express.Router();


//add user

router.post('/', async(req, res) => {
    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password});

        await user.save();
        return res.send(user);

    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

// All endpoints and route handlers go here

module.exports = router;