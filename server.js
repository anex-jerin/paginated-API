const express = require('express')
const app = express()
const port = 3000
const data = require('./data')
const paginatedResults = require('./middleware/paginatedResults')


app.get('/users',paginatedResults(data),(req,res)=>{
  res.json(res.usersFound)
} )

app.listen(port, () => {
  console.log('conected to port:' + port)
})
