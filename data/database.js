const sql2 = require('mysql2/promise');

const pool = sql2.createPool({
    host: 'localhost',
    database: 'blog_sql',
    user: 'root',
    password: 'Konodioda1!'
})

module.exports = pool;
