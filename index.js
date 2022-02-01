//import package
const express = require('express');

//middleware
const app = express();

//get request from anywhere
app.get('/',(req,res) => res.send('This is my first message!'));

//Listen on same port
app.listen(100, ()=> console.log('server up and running!'));

/* *****************************Commands****************************************** */
// "npm init" or "npm init -y" is used to create package.json
// "npm install express" is used for install express
// node index.js is used to run code

/* *****************************Commands for git****************************************** */
// git add.
// git push -u origin master
// git commit -m "3rd change"
