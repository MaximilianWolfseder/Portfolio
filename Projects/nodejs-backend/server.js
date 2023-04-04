//npm init -y
//npm install express
const { request } = require('express');
const express = require('express')
const app = express()


//npm install nedb
const Datastore = require("nedb")
const database = new Datastore("database.db")
database.loadDatabase()

//Date Handlers
const fullDate = Date()





//find
app.get('/api', (request, response) => {
    database.find({}, (err, data) =>{
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    })
});




app.use(express.static("public"))

app.set('view engine', 'ejs')


app.get('/api', (req, res) => {
    console.log("here")
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.use(express.json({limit: '1mb'}));

app.listen(3000)
//insert
app.post('/api', (request, response) => {
    const data = request.body;
    database.insert(data); 
    console.log(request.body);
});
