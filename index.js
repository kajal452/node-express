require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const jsonwebtoken = require('jsonwebtoken');
const dbConnection = require('./config/dbConnection');
dbConnection();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port, () => {
    // jsonwebtoken.sign({user: 'kajal'}, 'kajal452', {expiresIn: '1h'}, (err, token) => {
    //     if(err) throw err;
    //     console.log(token);
    // })
    console.log(`Example app listening at  http://localhost:${port}`);
});