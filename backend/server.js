const { application } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {
    return res.send('Aguardando CEPs...')
})

app.get('/info/:cep', async (req, res) => {
    var cep = req.params.cep
    console.log('REQ CEP: ' + cep)
    const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`)
    return res.json(data)
})

app.listen('4567')