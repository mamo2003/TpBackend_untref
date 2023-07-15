
const {connectToMongoDB, disconnectFromMongoDB} = require ('../config/db.js');
async function createCode  (req, res)  {
const codigo = Math.random()*1000;  
console.log(codigo);  
const articuloNuevo = req.body;
console.log(articuloNuevo);
if (articuloNuevo === undefined) {
    res.status(400).send("error de formato al crearlo");
}

const client = await connectToMongoDB();
if (!client) {
    res.status(500).send("error al conectarse al servidor");
}

    const collection = client.db("supermercado").collection("supermercado");
    collection.insertOne(articuloNuevo)
    .then(() => {
        console.log("se ha creado un nuevo articulo ");
        res.status(201).send(articuloNuevo);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        client.close();
    });
}

module.exports = {createCode}