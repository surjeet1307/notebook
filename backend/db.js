const mongoose=require('mongoose')

const link='mongodb://localhost:27017/inotesbook'

const connectTomd=()=>{
    mongoose.connect(link,()=>{
        console.log("Connect to Database");
    })
}

module.exports=connectTomd