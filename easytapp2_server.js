var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var _dirname='/root/apps/projects/node_projects/EasyTapp';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(_dirname+'/dist/MyApp'));

app.all('/',(req,res)=>{
res.status(200).sendFile(_dirname+'/dist/MyApp/index.html');
});

app.listen(3009);

console.log("EasyTapp listening on port 3009...");
