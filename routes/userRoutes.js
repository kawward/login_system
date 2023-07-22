const express             = require('express')
const passport            = require('passport')
const LocalStrategy       = require('passport-local').Strategy
const UserController      = require('../controllers/userController')
const user                = express.Router()


// ========== middelwares ========== //

// check if the user is authenticate
const isUserAuthenticate = (req,res,next) => {
     if(req.isAuthenticated()) {
          next()
     } else {
     return res.redirect('/login')
     }
}



// Get The Login Page
user.get('/login' , (req, res) => {
     res.render('login')
})

/* ========== HANDLER GET REQUESTES ========== */ 

// Get The Register Page
user.get('/register' ,(req, res) => {
     res.render('register')
})

// Get The Members Area Page
user.get('/' ,isUserAuthenticate, (req, res) => {
     res.redirect('/dashboard')
})
user.get('/dashboard' , isUserAuthenticate , (req, res) => {
     res.render('dashboard', {name : req.user.name})
})

/* ========== HANDLER POST REQUESTES ========== */ 

// Register A New User
user.post('/register' , UserController.Register)

// Login 
user.post('/login' , passport.authenticate('local', {
     successRedirect : '/',
     failureRedirect : '/login',
     failureFlash    :  true 
}))

module.exports = user;