const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');


const userSchema = new mongoose.Schema({ 
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: false},
    location: {type: String, required: false},
    password: {type: String, required: true, minlength: 5, maxlength: 100},
    isAdmin: { type: Boolean, default: false },
    profileImage: { type: String },
    dateModified: {type: Date, default: Date.now}
});


userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, firstName: this.firstName, isAdmin: this.isAdmin }, config.get('jwtSecret'));
};

const User = mongoose.model('User', userSchema);


//JOI VALIDATION ENSURES REQUEST IS IN CORRECT FORMAT

function validateUser(user) {
    const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    age: Joi.number().required(),
    location: Joi.string().required(),
    password: Joi.string().required().min(5).max(100),
    profileImage: Joi.string()
    });
    return schema.validate(user); 
}

    exports.User = User;
    exports.validate = validateUser;
    exports.userSchema = userSchema;

