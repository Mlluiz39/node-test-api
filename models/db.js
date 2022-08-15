const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_users', 'root', 'Julia2912@', {
  host: '144.22.247.45',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

  module.exports = sequelize