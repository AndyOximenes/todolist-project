
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {

  var today = new Date()
  var currentDay = today.getDay()

  if(currentDay === 6 ||currentDay === 0) {
      res.send("<h1>It's the weekend, brother! Take it easy ;)</h1>")
  } else {
      res.send("<h1>Let's work, dude!</h1>")
  }
    
  
});



app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
