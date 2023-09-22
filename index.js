require('dotenv').config();

const express = require('express');
const cors = require('cors');
const LogMiddleware = require('./middlewares/logs');
const mainRoute = require('./routes/index');

const SERVER_PORT = process.env.APP_PORT || 5000
const app = express();

app.use(LogMiddleware);
app.use(cors());
app.use(express.json());
 
 // ROUTE
 app.get('/', (req, res) => {
  res.json({
      message: 'Welcome client.',
  })
 })

// Main Route
app.use(mainRoute)


app.listen(SERVER_PORT, () => {
  console.log('Server Up and already running in Port ' + SERVER_PORT);
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

