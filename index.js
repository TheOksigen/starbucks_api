const express = require('express')
const app = express()
const data = require('./AllData.json')
const { generatePath } = require('./utils/generatePath')
const cors = require('cors')


app.use(cors())

app.get("/menu", (req, res) => {
    res.send(data.products)
})

app.get("/categories", (req, res) => {
    res.send(data.category)
})

app.get("/menu/:category", (req, res) => {

    const filteredData = data.products.filter(item => generatePath(item.subcategory) === req.params.category)
    res.send(filteredData)
})

app.get("/menu/:category/:product", (req, res) => {
    const findElement = data.products.find(item => generatePath(item.name) === req.params.product)
    res.send(findElement)

})

app.listen(3000, () => {
    console.log("application listening on http://localhost:3000");
})
