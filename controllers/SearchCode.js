
const {connectToMongoDB, disconnectFromMongoDB} = require ('../config/db.js')
async function SearchCode (req, res) {
  const superId = parseInt(req.params.id) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db("supermercado");
  const Super = await db.collection("supermercado").findOne({ codigo: superId });
  await disconnectFromMongoDB();
  !Super
    ? res
        .status(404)
        .send(
          `no es posible encontrar un producto con el codigo: ${superId}, intentalo nuevamente`
        )
    : res.send(Super);
};

module.exports={SearchCode}