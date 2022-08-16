import mongoose from 'mongoose';

const { Schema } = mongoose;

// Creating user schema

const schema = new Schema({
  fullName:                       {type: String},
  contactNumber:                  {type: String},                                                // phone
  emailId:                        {type: String},
  is_Available:                   {type: Boolean, default: true },
  is_Active:                      {type: Boolean, default: false},                               // phone is_Active or not
  is_verified:                    {type: Boolean, default: false},  
  distance:                       {type: String,  default:"5"},                                  // phone verified or not
  password:                       {type: String},                                                // encrypted password
  usertype:                       {type: String},  
  device_Token:                   {type: String},  
  for_toggle:                     {type: String},                                                // url of the profile picture
  cover_picture:                  {type: String, default: "/image/clientbannerImage.jpg"},       // cover photo
  status:                         {type: Number, enum: [1,0], default: 0},                       // account status active or not
  subscriptions:                  {type: Number, enum: [1,0], default: 0},
  otp:                            {type: Number},                                                // otp 
  is_deleted:                     {type: Boolean, default: false},                               // deleted flag
  created:                        {type: Date, default: Date.now}, 
});

schema.index({ location: "2dsphere" });
const User = mongoose.model('user', schema);
export default User;