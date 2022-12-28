const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
let ProfilModel = require('./models/profil')

//Read the key and value pair from the .env file and add it to the environment variable
//_____________________________________________________________________________________
dotenv.config()

//define the options
//__________________
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "profil",
};
mongoose.set("strictQuery", true);

//connect
//_______
mongoose.connect(process.env.MONGO_URI, options)
  .then(() => console.log("Connected."))
  .catch((error) => console.log(`Error connecting to MongoDB ${error}`));


//save the first person
//_____________________
// let persone = new ProfilModel({ 
//     name : 'amal', 
//     age : 33, 
//     favoriteFoods : ['pizza','lasagna','gateau']
// })
// persone.save()



//create list of persons
//______________________
 //ProfilModel.create([
//     { name : 'dali', age : 33, favoriteFoods : ['pasta','couscous','cake', 'burritos']},
//     { name : 'youssef', age : 5, favoriteFoods : ['pizza','burritos', 'pasta','m&ms','ships']},
//     { name : 'serra', age : 65, favoriteFoods : ['pizza','gateau','cake', 'burritos']},
//     { name : 'adel', age : 66, favoriteFoods : ['seefood','couscous','cafe']},
//     { name : 'sadok', age : 30, favoriteFoods : ['pasta','tacos','sushi']},
//     { name : 'mido', age : 18, favoriteFoods : ['ojja','libanes','ratatouille', 'sheesecake']},
//     { name : 'rossy', age : 7, favoriteFoods : ['chiken','fish']}
//])



//find all the list
//_________________
// ProfilModel.find()
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })





//find one person
//_______________
//ProfilModel.findOne({favoriteFoods:'m&ms'})
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })




//find by id
//__________
// ProfilModel.findById("63aa2746c963e43641124329")
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })





//Perform Classic Updates by Running Find, Edit, then Save
//________________________________________________________
//  ProfilModel.findById("63aa2746c963e43641124329", (error, res)=>{
//   if (error) {
//     console.log(error)
//   } else {
//     res.favoriteFoods.push('humberguer')
//     res.save()
//     console.log(res)
//   }
//  })





//Using model.findOneAndUpdate()
//______________________________
//  ProfilModel.findOneAndUpdate({name:'amal'},{age:20},{new:true})
//  .then(doc => {
//       console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })





//Using model.findByIdAndRemove
//_____________________________
// ProfilModel.findByIdAndRemove("63aa2746c963e4364112432b",(error, deleted)=>{
//     if (!error) {
//       console.log(deleted)
//     }})




//Delete Many Documents with model.remove
//_______________________________________
// ProfilModel.create(
// { name : 'Mary', 
//   age : 25, 
//   favoriteFoods : ['panini','tacos','sheesecake', 'burritos']})

// const deletByName=(val,done)=>{
//     //ProfilModel.remove({ name: val }, (err, doneJson) => {
//     //with remove it work bat we find in the terminal 'collection.remove is deprecated.' for that we use deleteMany
//   ProfilModel.deleteMany({ name: val }, (err, doneJson) => {
//   if (err) {
//     console.log(err)
//   } else {
//     done(null,doneJson)
//   }
//  })}
 
//  deletByName("Mary",(err,data)=>console.log(data))





//Chain Search Query Helpers to Narrow Search Results
//___________________________________________________
// ProfilModel.find({favoriteFoods :'burritos'})       // find all profils who like  'burritos'
// .limit(2)                                           // limit to 2 items
// .sort({name: 1})                                    // sort ascending by name
// .select({age: false} )                              // hide their age
// .exec((error,doc)=>{
//   if (error) {
//     console.error(error) 
//   } else {
//     console.log(doc)
//   }
// })                                                   // execute the query


app.listen(3002, () => console.log('app listening to port 3002'))