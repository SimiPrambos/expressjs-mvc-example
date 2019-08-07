const db = require('../config/database')

class BlogController {
    static index(req, res) {
        // logic here
        const query = `
            SELECT users.name, posts.title, posts.content
            FROM posts
            INNER JOIN users
            ON posts.user_id=users.id 
        `
        db.query(query, (err, rows, fields) => {
            if (err) {
                throw err
            }

            console.log(rows)

            return res.render('blogs', {
                posts: rows
            })
        })
    }

    static detail(req, res) {
        const post_id = req.params.post_id
        const query = `
                SELECT users.name, posts.title, posts.content
                FROM posts
                INNER JOIN users
                ON posts.user_id=${post_id}
            `
        db.query(query, (err, rows) => {
            console.log(rows)
            res.send(rows[0])
        })
    }
}




module.exports = BlogController