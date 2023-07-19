
const {connectToMongoDB, disconnectFromMongoDB} = require ('../config/db.js')
async function SearchCode (req, res) {
  const superId = parseInt(req.params.id) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db("supermercado");
  const Art= await db.collection("supermercado").findOne({ codigo: superId });
  await disconnectFromMongoDB();
  !Art
    ? res
        .status(404)
        .render(
          "pages/err2",{cuco:
          `no es posible encontrar un producto con el codigo: ${superId}, intentalo nuevamente`}
        )
    : res.render("pages/super", { Art: Art });  
};

module.exports={SearchCode}