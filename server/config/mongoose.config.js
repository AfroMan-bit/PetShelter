const mongoose = require('mongoose');


mongoose.connect(`mongodb://localhost/petsshelterDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => { console.log("Established a connection to petsshelterDB"); })
    .catch( () => { console.log("Something went wrong when connecting to the database") })
