const restify = require('restify'); //loads restify
const mongoose = require('mongoose'); //loads mongoose
const rjwt = require('restify-jwt-community'); //loads
const server = restify.createServer();
import dotenv from 'dotenv';
dotenv.config();
//Middleware
server.use(restify.plugins.bodyParser());

//Protected Routes
server.use(
    rjwt({ secret: process.env.JWT_SECRET }).unless({
        path: [
            '/api/auth',
            '/auth/register',
            '/api/debtors/',
            '/api/debtors:id'
        ]
    })
);
server.listen(process.env.PORT, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

const database = mongoose.connection;
database.on('error', (err) => {
    console.log(err);
});

database.once('open', () => {
    require('./routes/debtors')(server);
    require('./routes/users')(server);
    console.log(`Server running on Port: ${process.env.PORT}`);
});
