const bcrypt = require('bcrypt')
const User = require('../models/userModel')


exports.Register = async (req, res) => {

     const name = req.body.name;
     const email = req.body.email;
     const password = await bcrypt.hash(req.body.password , 10);

     // CHECK IF THE EMAIL IS ALREADY USED 
    
     // ADD USER TO DATABASE
     const newUser = new User({
          name : name,
          email : email,
          password : password,
     })
     newUser.save()
     .then(() => {
          console.log('new User Has Been Added To Database')
     })
     .catch (e => {
          console.log(e);
     })
}
