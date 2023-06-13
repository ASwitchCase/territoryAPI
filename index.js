const express = require('express')
const app = express()
const mailer = require('./services/email_access.js')
const mongo = require('./services/data_access.js')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())

app.get('/api/territoryDB',async (req,res) =>{
    const data = await mongo.load_data()
    res.send(data)
})

app.get('/api/updateData/:data',(req,res) =>{
    mongo.upload_data(req.params.data)
    res.send('Update sent')
})

app.post('/api/territoryDB',(req,res) =>{
    mongo.upload_data(req.body.tid)
    res.send('Update sent')
    res.end()
})

app.post('/api/sendMail',(req,res) =>{
    mailer.sendMail(req.body.recever, req.body.message)
    res.send('mail was sent')
    res.end()
})

app.listen(3100,() => console.log('listening...'))
