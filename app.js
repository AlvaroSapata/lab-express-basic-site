const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

app.get("/home",(req,res)=> {
  res.sendFile(__dirname+"/views/home.html")
})








const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})