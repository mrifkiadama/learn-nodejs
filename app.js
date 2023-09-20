import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ProductRoute from "./routes/ProductRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

// ROUTE
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome client.',
    })
})

const SERVER_PORT = process.env.APP_PORT || 3000

app.listen(SERVER_PORT, () => {
    console.log('Server Up and already running in Port ' + SERVER_PORT);
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});