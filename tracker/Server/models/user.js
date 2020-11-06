const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({ 
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, reuired: true},
    password: {type: String, required: true, minlength: 5, maxlength: 100},
    dateModified: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);


//JOI VALIDATION ENSURES REQUEST IS IN CORRECT FORMAT

function validateUser(user) {
    const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(5).max(100)
    });
    return schema.validate(user); 
}

    exports.User = User;
    exports.validate = validateUser;
    exports.userSchema = userSchema;

