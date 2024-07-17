/* // Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to Routine Optimizer API');
});

// Use the data routes defined in dataRoutes.js
app.use('/api', dataRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Example dataRoutes.js File:
const express = require('express');
const router = express.Router();

// Define GET route for retrieving data
router.get('/routines', (req, res) => {
  // Logic to retrieve routines from the database
  res.json({ message: 'Get all routines route' });
});

// Define POST route for adding new data
router.post('/routines', (req, res) => {
  // Logic to add a new routine to the database
  const { name, description } = req.body;
  // Add the routine to the database
  res.json({ message: 'New routine added successfully' });
});

module.exports = router; */