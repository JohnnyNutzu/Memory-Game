
const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const gameRouter = require('./routes/gameRouter');



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