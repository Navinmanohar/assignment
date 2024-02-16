// routes/transactions.js
const express = require('express');
const app = express.Router();
const axios = require('axios');
const Transaction = require('../models/Transaction');

// Initialize Database with Seed Data
app.post('/initialize-database', async (req, res) => {
  try {
    // Fetch data from third-party API
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = await response.data;

    // Insert data into MongoDB
    const data=await Transaction.insertMany(transactions);
        console.log(response)
    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to get all transactions
app.get('/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Endpoint to get statistics
app.get('/statistics/:month', async (req, res) => {
    const month = Number(req.params.month);
    const totalSaleAmount = await Transaction.aggregate([
      { $match: { dateOfSale: { $gte: new Date(2022, month - 1, 1), $lt: new Date(2022, month, 1) } } },
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);
    const totalSoldItems = await Transaction.countDocuments({ dateOfSale: { $gte: new Date(2022, month - 1, 1), $lt: new Date(2022, month, 1) }, sold: true });
    const totalNotSoldItems = await Transaction.countDocuments({ dateOfSale: { $gte: new Date(2022, month - 1, 1), $lt: new Date(2022, month, 1) }, sold: false });
  
    res.json({
      totalSaleAmount: totalSaleAmount[0]?.total || 0,
      totalSoldItems,
      totalNotSoldItems
    });
  });
  
  // Endpoint to get bar chart data
  app.get('/barchart/:month', async (req, res) => {
    const month = Number(req.params.month);
    const ranges = [
      { min: 0, max: 100 },
      { min: 101, max: 200 },
      { min: 201, max: 300 },
      { min: 301, max: 400 },
      { min: 401, max: 500 },
      { min: 501, max: 600 },
      { min: 601, max: 700 },
      { min: 701, max: 800 },
      { min: 801, max: 900 },
      { min: 901, max: Infinity },
      // Add the rest of your ranges here
    ];
    const data = await Promise.all(ranges.map(async range => {
      const count = await Transaction.countDocuments({ 
        dateOfSale: { $gte: new Date(2022, month - 1, 1), $lt: new Date(2022, month, 1) }, 
        price: { $gte: range.min, $lt: range.max } 
      });
      return { range: `${range.min}-${range.max}`, count };
    }));
  
    res.json(data);
  });
  
  // Endpoint to get pie chart data
  app.get('/piechart/:month', async (req, res) => {
    const month = Number(req.params.month);
    const data = await Transaction.aggregate([
      { $match: { dateOfSale: { $gte: new Date(2022, month - 1, 1), $lt: new Date(2022, month, 1) } } },
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);
  
    const formattedData = data.map(item => ({
      category: item._id,
      count: item.count
    }));
  
    res.json(formattedData);
  });


  
  // Endpoint to get combined data
  app.get('/combined/:month', async (req, res) => {
    const month = req.params.month;
    const statistics = await axios.get(`http://localhost:5000/api/statistics/${month}`);
    const barchart = await axios.get(`http://localhost:5000/api/barchart/${month}`);
    const piechart = await axios.get(`http://localhost:5000/api/piechart/${month}`);
  
    res.json({
        
      statistics: statistics.data,
      barchart: barchart.data,
      piechart: piechart.data,
    });
  });
  

module.exports=app; 