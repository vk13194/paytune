const express= require('express')
const dotenv= require('dotenv')
//const logger =require('./middleware/logger')
dotenv.config({path:'./config/config.env'}) 
const app=express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors')
//middleware
//app.use(logger)
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
connectDB();

app.use('/api', require('./routes/user'))
const PORT=process.env.PORT || 5000;

const server = app.listen( PORT, ()=>{
console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
  });
  