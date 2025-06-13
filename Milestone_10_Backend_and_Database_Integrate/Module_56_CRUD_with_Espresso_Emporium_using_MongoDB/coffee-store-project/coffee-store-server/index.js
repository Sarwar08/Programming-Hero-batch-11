const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// add database 

console.log(process.env.DB_USER, process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.67iskw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create db and collection 
    const coffeesCollection = client.db('coffeesDB').collection('coffees');
    const usersCollection = client.db('coffeesDB').collection('users');

    // get all coffees
    app.get('/coffees', async (req, res) => {
      const cursor = coffeesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // get a coffee
    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    })

    // create a coffee
    app.post('/coffees', async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result)
    })

    // update a coffee 
    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const updatedCoffee = req.body;

      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedDoc = {
        $set : updatedCoffee,
      }

      const result = await coffeesCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    })

    // delete a coffee
    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    })

    // user related APIs

    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.patch('/users', async (req, res) => {
      const {email, lastSignInTime} = req.body;
      const filter = {email: email};
      const updatedDoc = {
        $set: {
          lastSignInTime: lastSignInTime,
        }
      }

      const result = await usersCollection.updateOne(filter, updatedDoc)
      res.send(result);
    })

    app.post('/users', async (req, res) => {
      const userProfile = req.body; console.log(userProfile);
      const result = await usersCollection.insertOne(userProfile);
      res.send(result);
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('server ready');
})

app.listen(port, () => {
    console.log(`app is listening to port: ${port}`);
})