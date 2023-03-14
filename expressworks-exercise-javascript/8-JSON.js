var express = require ('express')
var app = express()
var fs = require('fs')

app.get('/book', function(req, res){
var filename = process.argv[3]
fs.readFile(filenmae, function(e, data) {
    if(e) return res.sendStatus(500)
    try {
        books = JSON.parse(data)
    } catch (e) {
        res.sendStatus(500)
    }
    res.json(books)
 })    
})
app.listen(process.argv[2])
