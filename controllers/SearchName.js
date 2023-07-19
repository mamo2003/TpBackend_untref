const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchName(req, res) {
  const superName = req.params.nombre;
  console.log(superName);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
/*   const lowerName =superName.toLowerCase();
  const name = lowerName[0].toUpperCase() + lowerName.substring(1); 
  console.log(name);*/
  const db = client.db("supermercado");
  const Art = await db
    .collection("supermercado")
    .find({ nombre: { $regex: superName, $options: "i" } })
    .toArray();
  console.log(JSON.stringify(Art));
  await disconnectFromMongoDB();
  !Art
    ? res
        .status(404)
        .send(
          `no es posible encontrar un producto en esta categoria: ${name}, intentalo nuevamente`
        )
    : res.render("pages/super", { Art: JSON.stringify(Art) });
}

module.exports = { SearchName};
