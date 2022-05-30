const { Client } = require('pg')

const password = process.env.PostgresPassword

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432, 
    password: password,
    database: "WalkMan-MusicPlayer"
})

module.exports = client;