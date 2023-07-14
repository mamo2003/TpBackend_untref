const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchName(req, res) {
  const superName = req.params.nombre;
  console.log(superName);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const regex = new RegExp(superName);
  const db = client.db("supermercado");
  const Nam = await db.collection("supermercado").find({ nombre: regex }).toArray();
  await disconnectFromMongoDB();
  !Nam
    ? res
        .status(404)
        .send(`no es posible encontrar un producto en esta categoria: ${Regex}, intentalo nuevamente`)
    : res.send(Nam);
}

module.exports = { SearchName};
