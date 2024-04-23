const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7utjicv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
        const coffeeCollaction = client.db("coffeeDB").collection("coffee");
        const userCollaction = client.db('coffeeDB').collection('user');

        app.get('/addcoffee', async (req, res) => {
            const cursor = coffeeCollaction.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get('/addcoffee/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollaction.findOne(query);
            res.send(result)
        })

        app.post('/addcoffee', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee)
            const result = await coffeeCollaction.insertOne(newCoffee);
            res.send(result)
        })

        app.put('/addcoffee/:id', async (req, res) => {
            const id = req.params.id;
            const updatedCoffee = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };

            const coffee = {
                $set: {
                    name: updatedCoffee.name,
                    chef: updatedCoffee.chef,
                    supplier: updatedCoffee.supplier,
                    taste: updatedCoffee.taste,
                    category: updatedCoffee.category,
                    details: updatedCoffee.details,
                    photo: updatedCoffee.photo,
                }
            }
            const result = await coffeeCollaction.updateOne(filter, coffee, options);
            res.send(result);
        })

        app.delete('/addcoffee/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            const result = await coffeeCollaction.deleteOne(query);
            res.send(result)
        });


        // user information
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log(user);
            // const newUser = {
            //     email: user.email,
            //     passwrod: user.passwrod,
            // }
            const result = await userCollaction.insertOne(user);
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('coffee making server is running')
});

app.listen(port, () => {
    console.log(`coffee caffe is running port on ${port}`)
})
