const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// engrsarwarhabib
// xIaf3rztlnP5UQK4

const uri = "mongodb+srv://engrsarwarhabib:xIaf3rztlnP5UQK4@cluster0.c73fb6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true, 
        deprecationErrors: true,
    }
})

async function run () {
    try {
        // connect to db
        await client.connect();

        // create db and collection 
        const usersCollection = client.db('usersdb').collection('users');

        // get documents
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // insert a document 
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = usersCollection.insertOne(newUser);
            res.send(result);
        })

        // ping your connection 
        await client.db('admin').command({ping: 1});
        console.log('Pinged. DB connected successfully');
    }
    finally {

    }

}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Server home route");
})


app.listen(port, () => {
    console.log(`server is listening port: ${port}`);
})

