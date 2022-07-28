const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const route = express.Router()
const Note = require('../models/Notes')
const { body, validationResult } = require('express-validator');
const { findById } = require('../models/User');
//Route 1: fetchuser from user
route.get('/fetchnotes', fetchuser, async (req, res) => {
   try {
      let notes = await Note.find({ req: req.users.id })
      res.json(notes)

   } catch (error) {
      res.send(err)
   }
})


// Route 2: Add user notes
route.post('/addnotes', fetchuser, [
   body('title').isLength({ min: 5 }),
   body('description').isLength({ min: 6 }),
], async (req, res) => {
   try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
      const {title,description,tag}=req.body
      const note=new Note({
         title,description,tag,user:req.users.id
      })
      const savedNote=await note.save();
      res.send(savedNote)
   } catch (error) {
      res.send(err)
   }
})

//Route 3: update notes
route.patch('/update/:id',fetchuser,async(req,res)=>{
   try{
   const {title,description,tag}=req.body
   const newNote={}
   if(title){newNote.title=title}
   if(description){newNote.description=description}
   if(tag){newNote.tag=tag}
   let note=await Note.findById(req.params.id)
   if(!note){
      res.status(401).send('Error')
   }

   if(note.user.toString()!==req.users.id){
      res.status(401).send('Error')
   }
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.send(note)
}
catch(err){
   res.send(err)
}
})


//Route 4: delete

route.delete('/delete/:id',fetchuser,async(req,res)=>{
try {
   let note=await Note.findById(req.params.id)
   if(!note){
      res.status(401).send('Error')
   }
   if(note.user.toString()!==req.users.id){
      res.status(401).send('Error')
   }
   let deleteNote=await Note.findByIdAndDelete(req.params.id)
   res.send(deleteNote)
} catch (error) {
  res.send(error) 
}
})


module.exports = route