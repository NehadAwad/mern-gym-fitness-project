require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT
const mongoose = require('mongoose')


const workoutRoutes = require('./routes/workouts.router')
const userRoutes = require('./routes/users.router')


//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, ()=>{
            console.log('db is connected & server is running on', PORT);
        });
    })
    .catch((error) => console.log(error))


