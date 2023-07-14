const { connectToMongoDB, disconnectFromMongoDB } = require("../config/db.js");

async function DeleteCode(req, res) {
    const Code = req.params.id;
    if (!Code) {
        return res.status(400).send("Codigo erroneo o invalido");
    }
    const client = await connectToMongoDB();
    if (!client) {
        return res.status(500).send("error al conectar a monogDB");
    }
    client.connect()
        .then(() => {
            const collection = client.db("supermercado").collection("supermercado");
            return collection.deleteOne({ codigo: parseInt(Code) });
        })
        .then((resultado) => {
            if (resultado.deletedCount === 0) {
                res.status(404).send("no se encontro el articulo con el codigo:", Code);
            } else {
                console.log("Articulo eliminado");
                res.status(204).render("pages/delete");
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("error al intentar eliminar la fruta");
        })
        .finally(() => {
            client.close();
        });
}

module.exports = { DeleteCode };
