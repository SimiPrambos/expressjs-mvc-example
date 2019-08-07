module.exports = function (req, res, next) {
    if (req.params.post_id !== '1') {
        return res.send('Id is not equal to 1')
    }
    next()
}