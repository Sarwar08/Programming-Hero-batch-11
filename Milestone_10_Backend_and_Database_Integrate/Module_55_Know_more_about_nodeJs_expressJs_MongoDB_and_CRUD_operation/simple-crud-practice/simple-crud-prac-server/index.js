const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// db credentials

// engrsarwarhabib
// xIaf3rztlnP5UQK4

const uri = "mongodb+srv://engrsarwarhabib:xIaf3rztlnP5UQK4@cluster0.c73fb6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// connect to db

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run () {

    try {
        // connect to db
        await client.connect();
        
        // create db and collection 
        const usersCollection = client.db('usersdb').collection('users');

        // api to get users
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // api to get a user
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        // api for create a user
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        // api to update a user
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};

            const user = req.body;

            const updateDoc = {
                $set : {
                    name: user.name,
                    email: user.email,
                }
            }

            const options = {upsert: true};

            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // api for delete a user
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })
        
        // ping if connected
        await client.db('admin').command({ping: 1});
        console.log('pinged. DB connection successful');
    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('server..')
})

app.listen(port, () => {
    console.log(`app listening: ${port}`);
})