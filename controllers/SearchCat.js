const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchCat(req, res) {
  const superCat = req.params.categoria;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const Recat = superCat.charAt(0).toUpperCase() + superCat.slice(1);
  const db = client.db("supermercado");
  const cat = await db.collection("supermercado").find({ categoria: Recat }).toArray();
  await disconnectFromMongoDB();
  !cat
    ? res
      .status(404)
      .send(
        `no es posible encontrar un producto en esta categoria: ${superCat}, intentalo nuevamente`
      )
    : res.send(cat);
}

module.exports = { SearchCat };
