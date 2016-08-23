const databaseName = process.env.NODE_ENV ? 'hazlodbTest' : 'hazlodb'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const db = pgp(connectionString)
const faker = require('faker')
