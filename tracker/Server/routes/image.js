
const express = require('express');
const Image = require('../models/imageModel');
const ImageRouter = express.Router();




/*
    upload image in base64 format, thereby,
    directly storing it in mongodb datanase
    along with images uploaded using firebase
    storage
*/    
ImageRouter.route("/upload-image")
    .post((req, res, next) => {
        const newImage = new Image({
            imageName: req.body.imageName,
            imageData: req.body.imageData
        });

        newImage.save()
            .then((result) => {
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    });

module.exports = ImageRouter;