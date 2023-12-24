const express = require("express")
const app = express()

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const queryResultGenerator = require('./utils/QueryResultGenerator.js')
const cors = require('cors')
const QueryData = require('./models/QueryData.js')

dotenv.config();
app.use(cors())
app.use(express.json())

mongoose.connect(
    process.env.MONGO_URL,
  ).then(()=>{console.log('Connected to DB')})


app.post('/api/query', async (req,res)=>{
    const {query} = req.body
    const allQueryData = await QueryData.find()
    const {rows, columns} = queryResultGenerator(allQueryData)
    res.status(200).json({rows, columns})
})

app.listen(8080, ()=>{
    console.log('Listening on port 8080...')
})