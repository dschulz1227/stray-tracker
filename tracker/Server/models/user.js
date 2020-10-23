const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, reuired: true},
    password: {type: String, reuired: true, minlength: 5, maxlength: 15},
    dateModified: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);


module.exports = User;