const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

//require routes
const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(8000, () => console.log("Server Running on Port 8000"));