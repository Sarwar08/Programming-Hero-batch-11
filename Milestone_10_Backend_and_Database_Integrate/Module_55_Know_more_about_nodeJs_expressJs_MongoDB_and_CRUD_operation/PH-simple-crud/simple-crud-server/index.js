const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());


// user: simpleDBUser
// pass: tiHNUs27sSTqVK3U

// const uri = 'mongodb://127.0.0.1:27017';

const uri = "mongodb+srv://simpleDBUser:tiHNUs27sSTqVK3U@cluster0.9c3fo4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try{
        await client.connect();

        const usersCollection = client.db('usersdb').collection('users');

        app.get('/users', async(req, res) =>{
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get('/users/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        app.post('/users', async(req, res) =>{
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        app.put('/users/:id', async(req, res) =>{
            const id = req.params.id;
            const filter = {_id : new ObjectId(id)}
            const user = req.body;

            const updatedDoc = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const options = { upsert: true };
            console.log(user);
            
            const result = await usersCollection.updateOne(filter, updatedDoc, options);

            res.send(result);
        })

        app.delete('/users/:id', async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

        await client.db('admin').command({ping: 1})
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally{

    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Simple Crud Server running')
});

app.listen(port, () => {
    console.log(`Simple CRUD server running on, ${port}`)
})

// try{

// }
// catch {
    
// }
// finally{
    
// }