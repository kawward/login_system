const express             = require('express')
const passport            = require('passport')
const LocalStrategy       = require('passport-local').Strategy
const userController      = require('./controllers/userController')
const User                = require('./models/userModel')
const UserRoutes          = require('./routes/userRoutes')
const session             = require('express-session')
const flash               = require('express-flash')
const bcrypt              = require('bcrypt') 
const app                 = express()
const Initialize          = require('./config/passport')

// config passport
Initialize(passport)

// config the view engine
app.set('view engine' , 'ejs')

// Middelwares
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))
app.use(flash())
app.use(session({
     secret : 'thi64387643876324g348243',
     resave : false,
     saveUninitialized : false
}))

// passport
app.use(passport.initialize())
app.use(passport.session())


// check if the user is authenticate
const isAuthenticate = (req,res,next) => {
     if(req.isAuthenticated()) {
          next()
     }
     return res.redirect('/login')
}

app.use(UserRoutes)


module.exports = app