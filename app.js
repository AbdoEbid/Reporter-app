
const express = require('express')
const app = express()
const port = process.env.PORT ||  3000
const authorRouter = require('./routers/authors')
const newsRouter = require('./routers/news')
require('./db/mongoose')

app.use(express.json())

app.use(authorRouter)
app.use(newsRouter)

app.listen(port,()=>{
    console.log('Server is running')
})