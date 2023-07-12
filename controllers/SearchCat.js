async function SearchCat (req, res) {
  const superCat = parseInt(req.params.categoria) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db("supermercado");
  const cat = await db.collection("supermercado").findOne({ codigo: superCat });
  await disconnectFromMongoDB();
  !cat
    ? res
        .status(404)
        .send(
          `no es posible encontrar un producto en esta categoria: ${superCat}, intentalo nuevamente`
        )
    : res.send(cat);
};

module.exports = {SearchCat}