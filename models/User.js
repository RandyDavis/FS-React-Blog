const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
    // local: {
    //     username: String,
    //     email: {
    //         type: String,
    //         unique: true
    //     },
    //     password: String
    // },
    // social: {
        google: {
            googleId: String
        }
    // }
});

// Create schema methods
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
}

mongoose.model('users', userSchema);