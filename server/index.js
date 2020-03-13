require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.get('/api/people', ctrl.getPeople)
app.get('/api/person/:id', ctrl.getPerson)
app.post('/api/person', ctrl.addPerson)
app.put('/api/person/:id', ctrl.updatePerson)
app.delete('/api/person/:id', ctrl.deletePerson)

app.listen(SERVER_PORT, () => console.log(`Blazin' on ${SERVER_PORT}`))