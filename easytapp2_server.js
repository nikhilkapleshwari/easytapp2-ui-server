var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var _dirname='/apps/easytapp2/easytapp2_server';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(_dirname+'/dist/EasyTappUI'));

app.all('/',(req,res)=>{
res.status(200).sendFile(_dirname+'/dist/EasyTappUI/index.html');
});

app.listen(3009);

console.log("EasyTapp listening on port 3009...");
