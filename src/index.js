const express = require("express")

require("./db/mongoose.js")
const User = require("./models/user")
const Task = require("./models/task")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()

const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('Maintenance in Progress, please try again later.')
//     // next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log("Server is running on port " + port)
})