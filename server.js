const express = require('express')
const mongoose = require('mongoose')
const app = express();

const uri = 'mongodb+srv://origiladi8@gmail.com:origiladi16@cluster0.pgadh9y.mongodb.net/node-tuts?retryWrites=true&w=majority'

// app.use(express.static('public'))
// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "UserTwo", "userThree"]})
// })
// app.listen(5000, () => console.log('server started on port 5000'))

async function connect() {
    try{
        await mongoose.connect(uri)
        console.log('connected to db');
    } catch(error){
        console.log(error)
    }
}
connect();

app.listen(8000, () => console.log('server started on port 8000'))
