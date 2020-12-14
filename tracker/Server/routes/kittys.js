const {Kitty, validate} = require('../models/kitty');
const {User} = require('../models/user');
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();

//Get all cats
router.get('/', async(req, res) => {
    try {
        const kitties = await Kitty.find();
        return res.send(kitties);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});


//Get cat by id
router.get('/:id', async (req, res) => { try {
    const kitty = await Kitty.findById(req.params.id);
        if (!kitty)
            return res.status(400).send(`The cat with id "${req.params.id}" does not exist.`);
    return res.send(kitty);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    });


//add kitty
router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) 
            return res.status(400).send(error);
        
        const kitty = new Kitty({
            userId: req.body.userId,
            nickName: req.body.nickName,
            gender: req.body.gender, 
            color: req.body.color,
            age: req.body.age
        });

        await kitty.save();
        return res.send(kitty);

    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//PUT REQUEST TO UPDATE Kitty
router.put('/:id', async (req, res) => { 
    try {
    const { error } = validate(req.body);
        if (error) return res.status(400).send(error);
    const kitty = await Kitty.findByIdAndUpdate( req.params.id,
    {
        userId: req.body.userId,
        nickName: req.body.nickName,
        gender: req.body.gender,
        color: req.body.color,
        age: req.body.age
    },
        { new: true }
        );
    if (!kitty)
        return res.status(400).send(`The kitty with id "${req.params.id}" does not exist.`);
        await kitty.save();
        return res.send(kitty); } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
});

//DELETE Kitty
router.delete('/:id', async (req, res) => { try {
    const kitty = await Kitty.findByIdAndRemove(req.params.id);
        if (!kitty)
            return res.status(400).send(`The kitty with id "${req.params.id}" does not exist.`);
            return res.send(kitty);
            } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
    });




//get cats by userId

router.get('/getByUserId/:userId', async(req, res) => {
    try {
        console.log(req.params.userId);
        const user = await Kitty.find({userId: req.params.userId});
        if (!user) 
            return res.send("user not found")
        return res.send(user);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});


//get by userid and cat name

router.get('/getByUserId/:userId/:nickName', async(req, res) => {
    try {
        console.log(req.params.userId);
        const user = await Kitty.find({userId: req.params.userId, nickName: req.params.nickName});
        if (!user) 
            return res.send("cat not found")
        return res.send(user);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;