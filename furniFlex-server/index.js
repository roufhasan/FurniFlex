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
    const cartsCollection = db.collection("carts");
    const categoriesCollection = db.collection("categories");
    const productsCollection = db.collection("products");

    /* ===> Category API <=== */
    app.get("/category", async (req, res) => {
      try {
        const result = await categoriesCollection.find().toArray();
        res.send(result);
      } catch (err) {
        console.log(`error getting categoris: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    // ===> Products API <===
    app.get("/products/:category", async (req, res) => {
      try {
        const { category } = req.params;
        const query = { category: category };
        const result = await productsCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        console.log(`error getting products: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    // ===> Carts API <===
    // Get cart items of an user
    app.get("/carts/:email", async (req, res) => {
      try {
        const { email } = req.params;
        if (!email) {
          return res.status(400).json({ message: "email is required!" });
        }

        const query = { email: email };
        const result = await cartsCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        console.log(`error getting cart items: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    // Add a item to the cart or update the quantity if exists
    app.put("/carts", async (req, res) => {
      try {
        const item = req.body;
        const { prodcutId, email, quantity } = item;

        const existingItem = await cartsCollection.findOne({
          prodcutId,
          email,
        });

        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity;
          const filter = { prodcutId, email };
          const updateCartQuantiy = { quantity: newQuantity };
          const result = await cartsCollection.updateOne(
            filter,
            updateCartQuantiy
          );
          res.send(result);
        } else {
          const result = await cartsCollection.insertOne(item);
          res.send(result);
        }
      } catch (err) {
        console.log(`error adding cart item: ${err}`);
        res.status(500).send("internal server error");
      }
    });

    // Delete a item from the carts
    app.delete("/carts/:id/:email", async (req, res) => {
      try {
        const { id, email } = req.params;
        if (!id || !email) {
          return res.status(400).json({ message: "id and email is required!" });
        }

        const query = { _id: new ObjectId(id), email: email };
        const result = await cartsCollection.deleteOne(query);
        res.send(result);
      } catch (err) {
        console.log("error deleting a cart item:", err);
        res.status(500).json({ error: "Internal Server Error" });
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
