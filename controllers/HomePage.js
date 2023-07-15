
const { user } = require("../public/user.js");

function HomePage(req, res, next) {
    try {
    res.status(200).render('pages/index',{ user });
    } catch (error) {
    res.status(400).send({ message: "error, no te has conectado al endpoint" });
    }
}

module.exports = { HomePage };
