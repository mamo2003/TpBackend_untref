const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchName(req, res) {
  const superName = req.params.nombre;
  console.log(superName);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const regex = new RegExp(superName.toLowerCase(), "i");
  const db = client.db("supermercado");
  const cat = await db.collection("supermercado").find({ categoria: regex }).toArray();
  await disconnectFromMongoDB();
  !cat
    ? res
        .status(404)
        .send(`no es posible encontrar un producto en esta categoria: ${regex}, intentalo nuevamente`)
    : res.send(cat);
}

module.exports = { SearchName};
