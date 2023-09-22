const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const LogMiddleware = require('./middleware/logs');
const mainRoute = require('./routes/index');

dotenv.config();

const app = express();

app.use(LogMiddleware);
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
 console.log('log terjadi request ke API ini');
 next();
})

app.use((req, res, next) => {
  console.log('middleware ke dua');
  next(); 
}) 

// ROUTE
app.get('/', (req, res) => {
 res.json({
     message: 'Welcome client.',
 })
})


app.use(mainRoute)



const SERVER_PORT = process.env.APP_PORT || 3000

app.listen(SERVER_PORT, () => {
    console.log('Server Up and already running in Port ' + SERVER_PORT);
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});