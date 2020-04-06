// THE CODE BELOW IS USING MONGOOSE TO CREATE SCHEMAS WITH VALIDATIONS 
const mongoose = require ("mongoose");
const bcrypt = require ("bcrypt");


// this below is an object validator to make each database entries in the PetSchema without duplicates
// const uniqueValidator = require('mongoose-unique-validator');

// the "unique: [true]" makes each field object unique and does not allow for duplicate objects or database entries and report them just like any other validation error.
// the "uniqueCaseInsensitive: [true]" is for case sensitivity of database entry.


const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, "User's must have a first name"],
        minlength: [3, "User's first name must be 3 characters or more"]
        // unique: [true],
        // uniqueCaseInsensitive: [true]
    },
    lastName: {
        type: String,
        required: [true, "User's must have a last name"],
        minlength: [3, "User's last name must be 3 characters or more"],
        // unique: [true],
        // uniqueCaseInsensitive: [true]
    }, 
    email: {
        type: String,
        required: [true, "User's email is required"],
        unique: [true],
        // uniqueCaseInsensitive: [true],
        validate: {
            // email validator format below
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    }, 
    password: {
        type: String,
        required: [true, "Users's password is required"],
        minlength: [8, "User's password must be 8 characters or longer"] 
    },
    confirmPassword: {
        type: String,
        required: [true, "Users's confirm password must match"],
    }
}, {timestamps: true});


// UserSchema.plugin(uniqueValidator);

// this below confirms the password and saves a hashed password
UserSchema.virtual('confirmPasswprd')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

// this below validates the password with the confirm password
UserSchema.pre('validate', function(next){
    if (this.password !== this.confirmPassword) {
        this.invalidate( 'confirmPassword', `Password must match confirm Password`);
    }
    next();
});

// this below saves the password hashed 
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model( "User", UserSchema);

