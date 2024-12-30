// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({message: 'Testing'});
});

// Start the server on port 3000
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
