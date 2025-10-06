import express from 'express'
import path from 'path'
import crud from 'crud.js'

const app = express()
const port = 3000

app.get('/', (req,res) => {
	
})






app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})