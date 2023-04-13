const express = require('express');
const jobs = require('./job_data.json')
const cors = require('cors')
const app = express();
const port = 3399;

app.use(cors())

app.get('/', (req, res)=> {
    res.send('hello from server site soon hooo')
});
app.get('/jobs', (req, res)=>{
    res.send(jobs);
});
app.get('/job/:id', (req, res)=>{
    const id = req.params.id;
    const job = jobs.find( job => job.id === id) || {};
    res.send(job)
});


app.listen(port, ()=>{
    console.log(`my first server port is: ${port}`)
});