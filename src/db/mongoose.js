const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL,
  {useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false
})



// const Tasks = mongoose.model("Tasks",{
//   description:{
//     type: String
//   },
//   completed:{
//     type: Boolean
//   }
// })
//
// const t = new Tasks({
//   description: "House-Keeping",
//   completed: true
// })
//
// t.save().then(()=>{
//   console.log(t)
// }).catch(()=>{
//   console.log("Error",error)
// })
