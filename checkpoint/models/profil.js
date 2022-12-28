let mongoose = require('mongoose')
//model of profil
//_______________
const ProfilSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favoriteFoods : [String],

    });
    module.exports = mongoose.model('Profil', ProfilSchema)