// Requires relevant modules from your node_modules
// Don't forget to install the necessary packages before running this code!
const express = require("express");
const cors = require("cors"); 

const app = express(); // Creates an Express application

app.use(cors()); // allows "cross-origin" requests

const port = 3000; // sets port where your server should run

app.listen(port, () => {
    console.log("Now listening on port", port);
}); // function that will run when you start your server


app.get("/cats", (req, res) => {
  const data = { catsArray: ["Ragdoll", "Moggie"] } 

  res.send(data);
});