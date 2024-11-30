const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staff');
const foodRoutes = require('./routes/food');
const saleRoutes = require('./routes/sale');

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api/staff', staffRoutes);  
app.use('/api/food', foodRoutes);   
app.use('/api/sales', saleRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
