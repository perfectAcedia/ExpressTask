const errorHandler = (err, req, res, next) => {
    if (err.statusCode) {
        return res.status(err.statusCode).send(`Error: ${err.message}`);
    }

    res.status(500).send('Error: Something went wrong');
}

module.exports = {
    errorHandler,
}