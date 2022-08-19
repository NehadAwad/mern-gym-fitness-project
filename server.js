require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT

const workoutRoutes = require('./routes/workouts.router')

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes)

app.listen(PORT, ()=>{
    console.log('server is running', PORT);
});
