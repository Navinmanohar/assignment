// server.js
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://navinmanoharinterngfg:3QFdFIwmCCQHhRwP@cluster0.ktfykk5.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api', require('./routes/transactions'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
