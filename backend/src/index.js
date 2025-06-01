const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// simple test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// test page that allows us to call the page
app.get('/api/hello', (req, res) => {
  res.json({greeting: 'Welcome to my site!' });
});

// catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () =>
  console.log(`Express server listening on http://localhost:${PORT}`)
);
