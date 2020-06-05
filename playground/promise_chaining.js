require("../src/db/mongoose")
const User = require("../src/models/user")

// User.findByIdAndUpdate("5eca91131f1b5b1e703a9af9",{age:21}).then((user)=>{
//   console.log(user)
//   return User.countDocuments({age:21})
// }).then((results)=>{
//   console.log(results)
// }).catch((e)=>{
//   console.log(e)
// })

const updateAgeAndCount = async (id,age) => {
  const user1 = await User.findByIdAndUpdate(id,{age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount("5eca91131f1b5b1e703a9af9",25).then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})
