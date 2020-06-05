require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("5ecb73ad9b3e042d008492dd").then((task)=>{
//   console.log(task)
//   return Task.countDocuments({completed:true})
// }).then((result)=>{
//   console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })

const deleteTask = async (id,completed) =>{
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed})
  return count
}

deleteTask("5ecb72dd41d8e008d823b122",false).then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})
