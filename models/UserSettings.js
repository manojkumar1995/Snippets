const mongoose =require('mongoose');
const Schema =mongoose.Schema;

//Create Schema

const UserSettingsSchema =new Schema({
  userid:{
    type:String,
    required:true
  },
  notification_sound: {
    type: Boolean,
  },
  darkmode: {
    type: Boolean,
  },
  email_notification: {
    type: Boolean,
  },
  telegram_notification: {
    type: Boolean,
  },
  date:{
    type:Date,
    default:Date.now
  }
});

mongoose.model('usersettings',UserSettingsSchema);