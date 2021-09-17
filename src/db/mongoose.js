const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})


// const me = new User({
//     name: 'Thomas',
//     age: 54,
//     password: 'Testingpassword'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error: ', error)
// })

// const shop = new Task({
//     description: 'Do laundry      '
// })

// shop.save().then(() => {
//     console.log(shop)
// }).catch(() =>{
//     console.log('Error: ', error)
// })