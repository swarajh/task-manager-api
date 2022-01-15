const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    
})







// const Task=mongoose.model('Tasks',{
    
//     description:{
//         type:String,
//         required:true,
//         trim:true

//     },
//     completed:{
//         type:Boolean,
//         required:false
//     }
// })

// const task=new Task({
//     description:'Learn Mongoose Library',
//     completed:false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })




















// const me= new User({
//     name:'  Swaraj  ',
//     email:'swaraj@gmail.com  ',
//     password:'Phone1234'

// })

// me.save().then(()=>{
//     console.log(me)

// }).catch((error)=>{
//     console.log('Error',error)
// })