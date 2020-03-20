// needed modules 
const express = require('express')
const app = express()
const expressEdge =require('express-edge').engine;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');



//db configs




//controllers






//middlewares





// settingUp middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressEdge);
app.set("views", __dirname + "/views");







//routes






//server
const port = process.env.port || 3000
app.listen(port , ()=> console.log('Server listening on port '+port))