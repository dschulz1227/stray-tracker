const {Kitty, validate} = require('../models/kitty');
const express = require('express');
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



//add user
router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) 
            return res.status(400).send(error);
        
        const kitty = new Kitty({
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

module.exports = router;