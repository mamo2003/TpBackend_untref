const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchName(req, res) {
  const superName = req.params.nombre;
  console.log(superName);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const ReName = superName.charAt(0).toUpperCase() + superName.slice(1);
  const db = client.db("supermercado");
  const Nam = await db.collection("supermercado").find({ nombre: ReName }).toArray();
  await disconnectFromMongoDB();
  !Nam
    ? res
        .status(404)
        .send(`no es posible encontrar un producto en esta categoria: ${ReName}, intentalo nuevamente`)
    : res.send(Nan);
}

module.exports = { SearchName};
