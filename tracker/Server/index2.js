const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const users = require('./routes/users');
const kittys = require('./routes/kittys');
const friends = require('./routes/friends');
const image = require('./routes/image');
const auth = require('./routes/auth')
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


// const createError = require('http-errors');

connectDB();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/kittys', kittys);
app.use('/api/auth', auth);
app.use('/api/friends', friends);
app.use('api/upload', image);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', '*');  // enables all the methods to take place
    return next();
  });


app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/*',(req,res)=>{
  res.sendfile(path.join(__dirname='/public'));
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
