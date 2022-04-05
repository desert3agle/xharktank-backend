const express = require("express");
const app = express();
const cors = require("cors");

// Environment variable setup
const dotenv = require("dotenv");
dotenv.config({ path: __dirname+"/config/.env" });


const bodyParser = require("body-parser");
const pitchesRoute = require("./routes/pitches.routes");

// Database connection
const databaseConnection = require("./config/db");
databaseConnection();


const PORT = process.env.PORT || 8081;


app.use(cors());

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use('/pitches', pitchesRoute);


/* root */
app.get('/', (req, res) => {
    res.send('server is up and running');
});


app.listen(8081, () => {
    console.log(`Server running on port ${PORT}...`);
  });