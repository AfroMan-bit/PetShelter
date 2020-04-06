const mongoose = require("mongoose");

const { Pet } = require('../models/pet.model');


module.exports.getAll  = (req, res) => {
    // this code below to get all pets
    Pet.find({})
        // this ".sort" below ensures that we see all the pets in an sorted way of a choice, i.e .sort(type) to sort all "type" objects in alphabetical order or .sort(-type) in reverse alphabetical order.
        .sort("type")
        .then( pets => { res.json(pets); })
        .catch( err => { res.status(400).json(err); })
}

module.exports.create = (req, res) => {
    // this code below to get new pets, if validation fails it returns error messages
    const { petName, type, desc, sk1, sk2, sk3 } = req.body;
    Pet.create({ petName, type, desc, sk1, sk2, sk3 })
        .then( pet => { res.json(pet) } )
        .catch( err =>{ res.status(400).json(err); })
}

module.exports.detail = (req, res) => {
    //this code below to get a specific pet
    const { id } = req.params;
    Pet.findOne({ _id: id })
        .then( pet => { res.json(pet) }) 
        .catch( err => { res.status(400).json(err); })
}

module.exports.update = (req, res) => {
    //this code below to update or edit a specific pet
    const { id } = req.params;
    const { petName, type, desc, sk1, sk2, sk3 } = req.body;
    Pet.findByIdAndUpdate({ _id: id }, { petName, type, desc, sk1, sk2, sk3 }, { new: true, useFindAndModify:true, runValidators: true })
        .then( pet => { res.json(pet) } )
        .catch( err => { res.status(400).json(err); })
}

module.exports.delete = (req, res) => {
    // this code below to delete or adopt a specific pet
    const { id } = req.params;
    Pet.deleteOne({ _id: id })
        .then( deleteConfirmation => { res.json(deleteConfirmation); } )
        .catch( err => { res.status(400).json(err); })
}


