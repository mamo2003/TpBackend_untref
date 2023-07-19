const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");
async function changeCode (req, res) {
    const codigo = req.params.id;
    const nuevoDato = req.body;
    if (!nuevoDato) {res.status(400).send("error de formato recibido para nuevos datos");};

    const client = await connectToMongoDB();
    if (!client) {res.status(500).render("pages/err");};
    const collection = client.db("supermercado").collection("supermercado");
    collection.updateOne({codigo: parseInt(codigo)},{$set: nuevoDato})
    .then(() => {
        console.log("articulo modificado");
        res.status(200).send(nuevoDato);
    })
    .catch((error) => {
        res.status(500).json({ descripcion: "error al modificar el articulo" });
    })
    .finally(() => {
        client.close();
    });
}

module.exports = {changeCode}