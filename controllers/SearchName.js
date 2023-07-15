const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchName(req, res) {
  const superName = req.params.nombre;
  console.log(superName);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const lowerName =superName.toLowerCase();
  const name = lowerName[0].toUpperCase() + lowerName.substring(1);
  console.log(name);
  const db = client.db("supermercado");
  const Nam = await db.collection("supermercado").find({ nombre: name }).toArray();
  await disconnectFromMongoDB();
  !Nam
    ? res
        .status(404)
        .send(`no es posible encontrar un producto en esta categoria: ${name}, intentalo nuevamente`)
    : res.send(Nam);
}

module.exports = { SearchName};
