const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Udhbhava", { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
})


app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});


