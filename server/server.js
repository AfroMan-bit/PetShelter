const express = require ("express");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));


require("./config/mongoose.config");
require("./routes/pet.route")(app); 


app.listen( 8000, () => { console.log("Server is locked and loaded on port 8000"); } )



// MAKE SURE YOU INSTALL THE FOLLOWING PACKAGES npm install
// jsonwebtoken
// bcrypt
// mongoose 
// express 
// cors
// cookie-parser
// --save mongoose-unique-validator








