// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Aderbal Filho',
  //   age: 30
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   },
  //   {
  //     name: 'Gunther',
  //     age: 27
  //   },
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Start course',
  //     completed: true,
  //   },
  //   {
  //     description: 'Continue course',
  //     completed: true,
  //   },
  //   {
  //     description: 'Finish course',
  //     completed: false,
  //   },
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').findOne({ _id: new ObjectID('5ec287ed85d11e26a28897bb') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 30 }).toArray((error, users) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(users)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID('5ec31377cda7f9275ddcd092') }, (error, task) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(tasks)
  // })

  // db.collection('users').updateOne({
  //   _id: new ObjectID('5ec3106a3395f626262d307c')
  // }, {
  //   // $set: {
  //   //   name: 'Mike'
  //   // }
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('users').deleteMany({
  //   age: 27
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: 'Continue course',
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})
