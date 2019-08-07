const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'simi',
  password: 'popo',
  database: 'my_blog'
})

db.connect(function (error) {
  if (error) {
    console.log(error)
  }
})

module.exports = db