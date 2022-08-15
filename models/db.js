const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://kfekrgal:g8UBsH8qabw0Pe58WJUx5iCvxkad0RKx@kesavan.db.elephantsql.com/kfekrgal',
  {
    dialect: 'postgres',
    port: 5432,
    host: 'kesavan.db.elephantsql.com',

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