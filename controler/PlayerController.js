const bodyParser = require('body-parser')
const Player = require('../model/player')

//For Register Page
const registerView = (req, res) => {
    res.render('register', {})
};

//Post Request for Register
const registerPlayer = (req, res) => {
  const { name, confirm } = req.body;

  if (name) {
    //Validation
        res.render("/register", {
          name,
          confirm,
        });
      } else {
        //Validation
        const newPlayer = new Player({
          name,
        });
            newPlayer
              .save()
              .then(res.redirect("/login"))
              .catch((err) => console.log(err)); 
};
  

module.exports = {
  registerView,
  registerPlayer,
}}
