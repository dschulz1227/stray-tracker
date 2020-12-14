const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const config = require('config');
const AWS = require('aws-sdk');



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
router.get('/getUserById/:id', async (req, res) => { try {
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

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');
        
        const salt = await bcrypt.genSalt(10);
             user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
            age:req.body.age,
            location: req.body.location});

        await user.save();
        // return res.send(user)

        const token = user.generateAuthToken();

        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(user);

    }   catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});


//select profile image

router.post('/updateImage/:userId', async (req, res) => { 
    
    // const { error } = validate(req.body);
    //     if (error) return res.status(400).send(error);
    //return res.send('yay i found the router')
    
    
    const ID = config.AWS_S3_ID;
    const SECRET = config.AWS_S3_SECRET;
    const BUCKET_NAME = config.AWS_S3_BUCKET_NAME;
    const s3 = new AWS.S3({
        accessKeyId: ID,
        secretAccessKey: SECRET
    });

    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }
    sampleFile = req.files.sampleFile;
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: sampleFile.name, // File name you want to save as in S3
        Body: req.files.sampleFile.data,
        ACL: "public-read"
    };
    const fullPath = `${config.AWS_S3_URL_LINK}/${sampleFile.name}`
    // Uploading files to the bucket and save image file path to database
    try {
        s3.upload(params, async function (err, data) {
            if (err) return res.send("Error");
            
            const user = await User.findByIdAndUpdate( req.params.userId,
                {
                avatar: fullPath
                },
                  { new: true }
                );
                if(user)
                res.status(200).send('File uploaded.');

        });
    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
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
        password: req.body.password ,
        age:req.body.age,
        location: req.body.location,
        profileImage: req.body.profileImage,
        bio: req.body.bio
        },

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

//Add profile image


//Add Bio







module.exports = router;