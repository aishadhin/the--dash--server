const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");

require('dotenv').config();
const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0pdgycc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("Songi_Vai_dashboard").collection("Users");

  } finally {
  }
}

run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
