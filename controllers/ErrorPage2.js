function ErrorPage2 (req, res, next) {
    res.status(200).render("pages/err2");
};

module.exports ={ErrorPage2};