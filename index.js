const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000


app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})



//rutas
app.use('/api/empleado',require('./router/empleado'))
app.use('/api/servicios',require('./router/servicios'))
app.use('/api/atencionesce',require('./router/atencionesce'))
app.use('/api/triaje',require('./router/triaje'))
app.use('/api/apidiabetes',require('./router/apidiabetes'))
app.use('/api/refcon',require('./router/refcon'))
app.use('/api/citas',require('./router/citas'))
app.use('/api/auth',require('./router/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})