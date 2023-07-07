const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
    .then(()=> console.log("Established Connection"))
    .catch(err => console.log("Failed", err));

    require("../models/Joke")