const path = require('path');
const express = require('express');
const app = express();

const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const asyncHandler = require('express-async-handler');

const connectDB = require('./config/db');
connectDB();

const Item = require('./models/ItemModel');

// utilizing cors to make requests across different ports locally:
const cors = require('cors');
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

// middleware to parse json:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// description: get items
// route: GET /api/items
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

app.get('/api/items', getItems);

// serve frontend:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`server started on port ${PORT}.`));
