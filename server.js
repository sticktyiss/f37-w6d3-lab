const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

const { incCount, getCounts } = require('./controller')

app.get('/api/ducks', getCounts);
app.put('/api/ducks/:type', incCount);

app.listen(4040,
  () => console.log(`server running on 4040`)
)