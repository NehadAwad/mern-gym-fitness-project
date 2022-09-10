require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
const PORT = process.env.PORT
const mongoose = require('mongoose')


const workoutRoutes = require('./routes/workouts.router')
const userRoutes = require('./routes/users.router')


//cors
// app.use(cors());
// app.options("", cors());
// app.use(function (req, res, next) 
// {
//       res.header("Access-Control-Allow-Origin", "");
//       res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//       res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,X-CallbackType, Content-Type, Accept");
//       res.header("Cache-Control", "no-cache");
//       if ("OPTIONS" == req.method) 
//       {
//           res.send(200);
//       }
//       else 
//      {
//        next();
//      }
// });

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


