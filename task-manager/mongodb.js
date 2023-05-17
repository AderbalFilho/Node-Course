// CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('task-manager');
    const users = db.collection('users');
    const tasks = db.collection('tasks');

    // const id = new ObjectId();
    // console.log(id.id.length);
    // console.log(id.toHexString().length);
    // console.log(id.getTimestamp());

    // try {
    //   const result = await users.insertOne({
    //     name: 'Aderbal Filho',
    //     age: 32
    //   });

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to insert user');
    // };

    // try {
    //   const result = await users.insertMany([
    //     {
    //       name: 'Jen',
    //       age: 28
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27
    //     },
    //   ]);

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to insert user');
    // };

    // try {
    //   const result = await tasks.insertMany([
    //     {
    //       description: 'Start course',
    //       completed: true,
    //     },
    //     {
    //       description: 'Continue course',
    //       completed: true,
    //     },
    //     {
    //       description: 'Finish course',
    //       completed: false,
    //     },
    //   ]);

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to insert tasks');
    // };

    // try {
    //   const result = await users.findOne({ _id: new ObjectId('64517b4e1bcb924596a10325') });

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to fetch');
    // };

    // try {
    //   const result = await users.find({ age: 32 }).toArray();

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to fetch');
    // };

    // try {
    //   const result = await tasks.findOne({ _id: new ObjectId('645265572bff3e1dbeee85d6') });

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to fetch');
    // };

    // try {
    //   const result = await tasks.find({ completed: false }).toArray();

    //   console.log(JSON.stringify(result));
    // } catch (error) {
    //   console.log('Unable to fetch');
    // };

    // try {
    //   await users.updateOne({ _id: new ObjectId('64517b4e1bcb924596a10325') }, {
    //     $set: {
    //       name: 'Mike'
    //     }
    //     // $inc: {
    //     //   age: 1
    //     // }
    //   }).then((result) => {
    //     console.log(result)
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    // } catch (error) {
    //   console.log(error);
    // };

    // try {
    //   await tasks.updateMany({
    //     completed: false
    //   }, {
    //     $set: {
    //       completed: true
    //     }
    //   }).then((result) => {
    //     console.log(result)
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    // } catch (error) {
    //   console.log(error);
    // };

    // try {
    //   await users.deleteMany({
    //     age: 27
    //   }).then((result) => {
    //     console.log(result)
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    // } catch (error) {
    //   console.log(error)
    // };

    try {
      await tasks.deleteOne({
        description: 'Continue course',
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    };
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
