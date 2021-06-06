const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const axios = require('axios')
const pokemon = 'charmander'
const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

app.get('/', (req, res) => {
    axios.get(api).then(respond => {
        res.send(respond.data.forms[0].name)
    }).catch(err => {
        console.error(err)
    })
})

app.listen(PORT, () => {
    try {
        console.log(`Port ${PORT} is running.`)
    } catch (err) {
        console.error(err)
    }
})