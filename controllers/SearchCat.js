const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function SearchCat(req, res) {
  const superCat = req.params.categoria;
  console.log(superCat);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).render("pages/err");
    return;
  }
  const lowerCategoria = superCat.toLowerCase();
  const categoria= lowerCategoria[0].toUpperCase() + lowerCategoria.substring(1);
  console.log(categoria); 
  const db = client.db("supermercado");
  const Art= await db.collection("supermercado").find({ categoria:categoria}).toArray();
  await disconnectFromMongoDB();
  !Art
    ? res
        .status(404)
        .render("pages/err")
    : res.render("pages/table", { Art: Art }); 
}

module.exports = { SearchCat };
