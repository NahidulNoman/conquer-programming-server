const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categoryCourse = require('./Course&Details/CategoryCourse.json');
const detailCourse = require('./Course&Details/detailsCourse.json');

app.get('/', (req,res) => {
    res.send('conquer server is running')
})
app.get('/courseCategory', (req,res) => {
    res.send(categoryCourse);
})
app.get('/details', (req,res) => {
    res.send(detailCourse)
})

app.listen(port , () => {
    console.log('conquer server is running ...')
})