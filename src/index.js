const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv');
const { findRestaurant, game24 } = require('./controller/jenosize')
const { verityType } = require('./utils/validate')
dotenv.config();

const app = express()
app.use(morgan('tiny'))

app
  .get('/restaurant/:restaurantName', findRestaurant)
  .get('/game24/:value1/:value2/:value3/:value4', verityType, game24)


app.listen(100, () => {
  console.log('api is start port -> 100')
})