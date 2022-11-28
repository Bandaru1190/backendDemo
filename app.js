// Requiring module
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.json({
        meg:"Hello Backend"
    })
})
 
// Port Number
const PORT = process.env.PORT ||3000;
 
// Server Setup
app.listen(PORT,console.log(
    `Server started on port ${PORT}`));