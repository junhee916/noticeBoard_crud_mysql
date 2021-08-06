const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host : "localhost",
    user : "junhee",
    password : "123123",
    database : "NoticeBoard"
})