const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/todos', todos)

module.exports = { app }
