const mongoose = require('mongoose');
const Joi = require('joi');

const kittySchema = new mongoose.Schema({ 
    userId: {type: String, required: true},
    nickName: { type: String, required: true},
    gender: {type: String},
    color: {type: String, required: true},
    age: {type: Number} || {type: String},
    dateModified: {type: Date, default: Date.now}
});

const Kitty = mongoose.model('Kitty', kittySchema);


//JOI VALIDATION ENSURES REQUEST IS IN CORRECT FORMAT

function validateKitty(kitty) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        nickName: Joi.string().required(),
        gender: Joi.string(),
        color: Joi.string().required(),
        age:  Joi.number() || Joi.string() 
    });

    return schema.validate(kitty); 
}
    
    exports.Kitty = Kitty;
    exports.validate = validateKitty;
    exports.kittySchema = kittySchema;

