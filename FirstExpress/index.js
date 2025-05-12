const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));
app.get('/about', (req, res) => res.send('<h1>Hello, This is About Page</h1>'));
app.get('/contact', (req, res) => res.send('<h1>Hello, This is Contact Page</h1>'));
app.get('/search', (req, res) => res.send('<h1>Hello, This is Search Page</h1>'));
app.get('/service', (req, res) => res.send('<h1>Hello, This is Service Page</h1>'));

app.listen(8000, () => console.log(`Example app listening on port 8000!`)) 