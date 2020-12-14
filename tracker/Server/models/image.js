const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
  imageUrl : { type: String }
})

let Image = new mongoose.Schema(
   ({
      imageUrl: String
    })
  );


// let Image = mongoose.model('Image', imageSchema);
 
exports.Image = Image;
exports.imageSchema = imageSchema;