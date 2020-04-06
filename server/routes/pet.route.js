const PetController = require("../controllers/pet.controller");

const Users = require("../controllers/user.controller");

const { authenticate } = require("../config/jwt");


module.exports = function(app){

    // ROUTES FOR LOGIN AND REGISTARTION BELOW 

    // "/api/register" route registers all users 
    app.post("/api/register", Users.register);
    // "/api/register" route registers all users 
    app.post("/api/login", Users.login);

   
    // ROUTES FOR PET SHELTER BELOW 
    app.get("/api/pets", authenticate, PetController.getAll); // route returns all pets
    app.post("/api/pets/new", authenticate, PetController.create); // route returns new pet
    app.get("/api/pets/:id", authenticate, PetController.detail); //route returns a specific pet detail
    app.put("/api/pets/:id/edit", authenticate, PetController.update); //route returns a specific pet to edit
    app.delete("/api/pets/:id", authenticate, PetController.delete); //route removes a specific pet
}
 