const path = require('path')
const express = require('express')

const port = process.env.PORT || 8080
const app = express()

const assetsPath = path.join(__dirname, '/../docs')
const htmlPath = path.join(__dirname, '/../docs/index.html')

app.use(express.static(assetsPath))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(htmlPath))
})

app.listen(port)
