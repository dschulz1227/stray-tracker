const {User, validate} = require('../models/user');
const express = require('express');
const router = express.Router();

//Get all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});


//Get user by id
router.get('/:id', async (req, res) => { try {
    const user = await User.findById(req.params.id);
        if (!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
    return res.send(user);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    });



//add user
router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) 
            return res.status(400).send(error);
        
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

//PUT REQUEST TO UPDATE USER
router.put('/:id', async (req, res) => { try {
    const { error } = validate(req.body);
        if (error) return res.status(400).send(error);
    const user = await User.findByIdAndUpdate( req.params.id,
    {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password },

          { new: true }
        );
    if (!user)
        return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
        await user.save();
        return res.send(user); } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
});

//DELETE USER
router.delete('/:id', async (req, res) => { try {
    const user = await User.findByIdAndRemove(req.params.id);
        if (!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
            return res.send(user);
            } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    });

module.exports = router;