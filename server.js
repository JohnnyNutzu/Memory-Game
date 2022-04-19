
const express =require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
const gameRouter = require('./routes/gameRouter');
var path = require('path');



const dbUri = 'mongodb+srv://Netflix:Netflix@cluster0.7n1lg.mongodb.net/Game?retryWrites=true&w=majority'
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))

app.use(express.static("./"));
// register view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());


app.use('/', gameRouter)



app.listen(3000);