const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");
async function Super(req, res) {
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db("supermercado");
  const Art= await db.collection("supermercado").find().toArray();
  await disconnectFromMongoDB();
  res.render("pages/table", { Art: JSON.stringify(Art) }); 
}

module.exports = { Super };
