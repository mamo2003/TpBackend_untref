function ErrorPage2 (req, res, next) {
    res.status(200).render("pages/err");
};

module.exports ={ErrorPage2};