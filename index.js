// Härifrån startar vi upp vår webshop
const mongoose = require('mongoose')

const {
    app,
    PORT
} = require('./src/server')
const dbConfig = require('./config/config')

// Kicka igång servern
const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(dbConfig.databaseUrl, dbOptions).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
})

module.exports = {
    app,
    PORT
}