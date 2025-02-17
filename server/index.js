//Header
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wm7nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    // collections 
    const serviceCollection = client.db('car-park').collection("services");
    const bookingCollection = client.db('car-park').collection("service-booking")

    app.get('/services', async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/services/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const options = {
        projection: {
          service_title: 1,
          description: 1,
          cost: 1,
          time: 1,
          engineer_name: 1,
          facilities: 1,
          image_url: 1
        }
      }
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    })

    // post service booking data

    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    })

    app.get("/bookings", async (req, res) => {
      const cursor = bookingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })


    app.get("/bookings", async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = {email: req.query.email}
      }
      const result = await bookingCollection.find().toArray();
      res.send(result);
    })


    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
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




//---------------------------------------------------
// Footer
//___________________________________________________

app.get('/', (req, res) => {
  res.send('Car Park Running...');
})

app.listen(port, () => {
  console.log(`Car Park Running...${port}`);
})
