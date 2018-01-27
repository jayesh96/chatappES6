const path = require('path');
const express = require('express');


const public_path = path.join(__dirname,'../public');
const port = process.env.PORT || 3001;
var app = express();
app.use(express.static(public_path));

app.listen(3000,() =>{
	console.log(`Server is up ${port}`)
})
