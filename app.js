const express = require('express')
const cors = require('cors')

const app = express()

const Order = require('./src/models/Order')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(cors(corsOptions))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})

app.get('/order', async (req, res) => {
  const order = await Order.findAll()
  return res.json(order)
})

app.get('/order', async (req, res) => {
  const orders = await Order.findAll()
  return res.json(orders)
})

app.get('/order/:id', async (req, res) => {
  const order = await Order.findByPk(req.params.id)
  return res.json(order)
})

app.post('/order', async (req, res) => {
  const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.create({
    id: Order.id,
    firstName,
    hamburger,
    drink,
    follow_up,
  })
  return res.json(order)
})

app.put('/order/:id', async (req, res) => {
  const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.update(
    { firstName, hamburger, drink, follow_up },
    { where: { id: req.params.id } }
  )
  return res.json(order)
})

app.delete('/order/:id', async (req, res) => {
  const order = await Order.destroy({ where: { id: req.params.id } })
  return res.json(order)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
