const { request } = require('express');
const express = require('express');


const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();
const app = express();

app.get('/api', (request, response) => {
    database.find({}, (err, data) =>{
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    })
});

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.post('/api', (request, response) => {
    const data = request.body;
    database.insert(data); 
    console.log(request.body);
});
