const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categoryCourse = require('./Course&Details/CategoryCourse.json');
const detailCourse = require('./Course&Details/detailsCourse.json');

// test server 
app.get('/', (req,res) => {
    res.send('conquer server is running')
});

// get side category API 
app.get('/courseCategory', (req,res) => {
    res.send(categoryCourse);
});

// get all detail category API
app.get('/details', (req,res) => {
    res.send(detailCourse)
});

// get unique data for unique category
app.get('/courseDetails/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const selected = detailCourse.find( n => n.id === id)
    res.send(selected)
});

// server is running 
app.listen(port , () => {
    console.log('conquer server is running ...')
});