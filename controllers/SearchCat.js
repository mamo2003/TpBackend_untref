const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchCat(req, res) {
  const superCat = req.params.categoria;
  console.log(superCat);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const lowerCategoria = superCat.toLowerCase();
  const categoria= lowerCategoria[0].toUpperCase() + lowerCategoria.substring(1);
  console.log(categoria);
  const db = client.db("supermercado");
  const cat = await db.collection("supermercado").find({ categoria:categoria}).toArray();
  await disconnectFromMongoDB();
  !cat
    ? res
      .status(404)
      .send(
        `no es posible encontrar un producto en esta categoria: ${categoria}, intentalo nuevamente`
      )
    : res.send(cat);
}

module.exports = { SearchCat };
