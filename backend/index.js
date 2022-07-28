const express=require('express')
const contecttodb=require('./db')
contecttodb()
const app = express()
const port = 5000
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Connect to server`)
})
