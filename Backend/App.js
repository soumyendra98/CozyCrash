const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 

// Database connection
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Udhbhava", { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
})

// Middleware
app.use(express.json());

// Routes
const PanelRouter = require("./routes/Admin/Panel");
const MangeRouter = require("./routes/Admin/Manage");

app.use(PanelRouter);
app.use(MangeRouter);


app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});


