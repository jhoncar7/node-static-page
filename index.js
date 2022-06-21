const express = require('express')
const app = express();
require('dotenv').config();

const port = process.env.PORT;

const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
//has publica esa carpeta de public, servir contenido estatico
app.use(express.static('public')); //va por defecto en el path '/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhon Carreño',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jhon Carreño',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jhon Carreño',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.render('404')
})


/* app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})