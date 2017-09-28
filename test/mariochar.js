const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Create Schema
const MarioCharSchema = new Schema ({
  name: String,
  weight: Number
})

//create Model
const MarioChar = mongoose.model('mariochar', MarioCharSchema)

module.exports = MarioCharSchema
//now in other files I can do var myChar = new MarioChar({})
