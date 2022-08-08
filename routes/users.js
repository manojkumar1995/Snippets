const express =require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport =require('passport');
const router = express.Router();

//Load User Model
require('../models/Users');
require('../models/UserSettings');

const User= mongoose.model('users');
const Usersettings= mongoose.model('usersettings');

const { ensureAuthenticated} =require('../helpers/auth');


//User Login Route
router.get('/login',  (req,res) => {
  res.render('users/login');
});


//User Register Route
router.get('/registration', (req, res) => {
  res.render('users/register');
});

//Login Form POST Users 
router.post('/login',(req,res, next)=>{
   passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/users/login',
     failureFlash:true 
   })(req,res,next);
});


// Register Form POST
router.post('/register', (req, res) => {
  let errors = [];

  if(req.body.password != req.body.password2){
    errors.push({text:'Passwords do not match'});
  }

  if(req.body.password.length < 4){
    errors.push({text:'Password must be at least 4 characters'});
  }

  if(errors.length > 0){
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    User.findOne({email:req.body.email})
    .then(user=>{
      if(user){
        req.flash('error_msg','Email already Registered');
        res.redirect('/users/login');
      }
      else{
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;

              newUser
                .save()
                .then()
                .catch(err => {
                  console.log(err);
                  return;
                });
                const newUserSettings = new Usersettings({
                  userid: newUser._id,
                  notification_sound: true,
                  darkmode: true,
                  email_notification: true,
                  telegram_notification: true,
                })
                newUserSettings.save().then(obj =>{
                  req.flash('success_msg', 'You are Registered .Please Login');
                  res.redirect('/users/login');
                })
                .catch(err =>{
                  console.log(err);
                  return;
                });
            });
          });
      }
    })

  }
});

// My Profile
router.get('/myprofile/:id',ensureAuthenticated,  (req,res) => {
  res.render('users/myprofile', { layout: 'main.nodejs.handlebars' });
});

// My profile Settings
router.get('/myprofile/:id/settings',ensureAuthenticated,(req,res) => {
  res.render('users/settings',{ layout: 'main.nodejs.handlebars'});
});

router.get('/myprofile/:id/settings-json',ensureAuthenticated,(req,res) => {
  const id = req.params.id.trim()
  Usersettings.findOne({userid:id}).then(settingobj=>{
    const {notification_sound, darkmode,email_notification,telegram_notification} = settingobj;
    res.json({
      notification_sound,
      darkmode,
      email_notification,
      telegram_notification
    });
  })
});

// Update Usersettings
router.post('/myprofile/:id/settings-json',ensureAuthenticated,(req,res) => {
  const id = req.params.id.trim()
  const {task,taskstatus} = req.body;
  const update = {[task]:taskstatus}
  Usersettings.findOneAndUpdate({userid:id},update,{new: true}).then(userobj=>{
    const {notification_sound,darkmode,email_notification,telegram_notification} = userobj;
    res.json({
      notification_sound,
      darkmode,
      email_notification,
      telegram_notification
    })
  })
});

//Logout User

router.get('/logout', (req,res) =>{
  req.logout();
  req.flash('success_msg','You are logged out');
  res.redirect('/users/login');
});


module.exports =router;
