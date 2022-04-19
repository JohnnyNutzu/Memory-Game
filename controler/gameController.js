const bodyParser = require('body-parser')

//For Game Page
const gameView = (req, res) => {
    res.render('game')
};
  
module.exports = {
   gameView
};
  