const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config()
require('./database/index')
const app = express();
//Passing body data
app.use(express.json());
app.use(cors());
  const PORT = process.env.PORT || 5000;

  // admin routes
const authRoutes = require('./routes/auth.router')
const eventRouter = require('./routes/event.router');
const addPeoplerouter = require('./routes/people.router')
const addShifts = require('./routes/shift.router')
const addmessage = require('./routes/message.router')

  app.use('/api',authRoutes);
app.use('/api', eventRouter);
app.use('/api', addPeoplerouter)
app.use('/api', addShifts)
app.use('/api', addmessage)

app.listen(PORT,() =>{
    console.log('server running on :' + PORT);
})

