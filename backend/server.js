const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./authRouter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use(express.json());
app.use("/auth", authRoute);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://rpekar61:4Ffq7RG3JO0UfqE0@auth.mt0eojt.mongodb.net/?retryWrites=true&w=majority&appName=auth');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
