const mongoose = require('mongoose');

// this below is an object validator to make each database entries in the PetSchema without duplicates
// const uniqueValidator = require('mongoose-unique-validator');




//For the ONE TO ONE RELATIONSHIP below

// the "unique: [true]" makes each field object unique and does not allow for duplicate objects or database entries and report them just like any other validation error.
// the "uniqueCaseInsensitive: [true]" is for case sensitivity of database entry.

const PetSchema = new mongoose.Schema({
    petName: { 
        type: String,
        required: [true, "Pets should have a name right?"],
        minlength: [3, "Pet name must be atleast 3 characters or more!"],
        // unique: [true],
        // uniqueCaseInsensitive: [true]
    },
    type: { 
        type: String,
        required: [true, "What kind of Pet is this?"],
        minlength: [3, "Pet type must be atleast 3 characters or more!"],
        // unique: [true]
    },
    desc: { 
        type: String,
        required: [true, "What is your Pet all about?"],
        minlength: [3, "Describe your pet's personality please!"],
        // unique: [true]
    },
    sk1: { type: String },
    sk2: { type: String },
    sk3: { type: String },
}, { timestamps: true })

// PetSchema.plugin(uniqueValidator);

module.exports.Pet = mongoose.model('Pet', PetSchema);




//For the ONE TO MANY RELATIONSHIP below
// import SkillSchema from below


// const SkillSchema = new mongoose.Schema({
//      skill:{ type: String }
// })


// const PetSchema = new mongoose.Schema({
//     petName: { 
//         type: String,
//         required: [true, "Pets should have a name right?"],
//         minlength: [3, "Pet name must be atleast 3 characters or more!"]
//     },
//     type: { 
//         type: String,
//         required: [true, "What kind of Pet is this?"],
//         minlength: [3, "Pet type must be atleast 3 characters or more!"]
//     },
//     description: { 
//         type: String,
//         required: [true, "What is your Pet all about?"],
//         minlength: [3, "Describe your pet's personality please!"]
//     },
//     skills: [SkillSchema]
//     }, 
//     { timestamps: true }
// );

// const Pet = mongoose.model("Pet", PetSchema);

// module.exports = Pet;









