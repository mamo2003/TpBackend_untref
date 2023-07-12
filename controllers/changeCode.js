async function changeCode (req, res) {
    const codigo = req.params.id;
    const nuevosDatos = req.body;

    if (!nuevosDatos) {
    res.status(400).send("error de formato recibido para nuevos datos");
    }

    const client = await connectToMongoDB();
    if (!client) {
    res.status(500).send("erro al conectarse a mongoDB");
    }

    const collection = client.db("supermercado").collection("supermercado");
    collection
    .updateOne({ codigo: parseInt(codigo) }, { $set: nuevosDatos })
    .then(() => {
        console.log("articulo modificado");
        res.status(200).send(nuevosDatos);
    })
    .catch((error) => {
        res.status(500).json({ descripcion: "error al modificar el articulo" });
    })
    .finally(() => {
        client.close();
    });
}

module.exports = {changeCode}