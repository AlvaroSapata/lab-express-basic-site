const express = require('express')
const app = express()

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

app.get("/home",(req,res)=> {
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})


app.get("/gallery", (req, res) =>{
  res.sendFile(__dirname + "/views/gallery.html")
})

app.get("/works", (req, res) =>{
res.sendFile(__dirname + "/views/works.html")
})



const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})