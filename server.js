const express = require('express');
const app = express();
const port = 3000;

// Middleware for serving static files from the 'public' directory
app.use(express.static('public'));

// First static endpoint to serve 'index.htm
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.htm');
});

// Third dynamic endpoint (API) that returns a JSON response based on a 'number' parameter
app.get('/votre-endpoint', (req, res) => {
  // Retrieve the 'number' parameter from the request
  const number = req.query.number;

  // Check if 'number' is defined and is a number
  if (number !== undefined && !isNaN(number)) {
    // Use 'number' to generate a JSON response.
    const result = { message: `You generated the number ${number}` };
    res.json(result);
  } else {
    // In case of an error or a missing parameter
    res.status(400).json({ error: 'Invalid or missing "number" parameter' });
  }
});

// Starting the Express server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
