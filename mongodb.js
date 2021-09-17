const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database')
    }

     const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Thomas',
    //     age: 54
    // })
//     db.collection('tasks').insertMany([{
//         description: 'Get groceries',
//         completed: false
//     }, {
//         description: 'Do laundry',
//         completed: true
//     }, {
//         description: 'Pay bills',
//         completed: false
//     }], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert documents')
//         }

//         console.log(result.ops)
//     })

    // db.collection('tasks').findOne({_id: new mongodb.ObjectID('60ccfda9c3f5264ad1a151bf')}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find record')
    //     }
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: false}).toArray( (error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to find record')
    //     }
    //     console.log(tasks)
    // })
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        description: 'Get groceries'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
 })
