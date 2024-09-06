const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDb URL
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Database
    const db = client.db("furniFlexDb");
    const categoriesCollection = db.collection("categories");
    const productsCollection = db.collection("products");

    app.get("/category", async (req, res) => {
      try {
        const result = await categoriesCollection.find().toArray();
        res.send(result);
      } catch (err) {
        console.log(`error getting categoris: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    app.get("/products/:category", async (req, res) => {
      const { category } = req.params;
      try {
        const query = { category: category };
        const result = await productsCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        console.log(`error getting products: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("FurniFlex server is running");
});

app.listen(port, () => {
  console.log(`FurniFlex server is running on port: ${port}`);
});
