const express = require('express');
const cors = require('cors');

const server = express();

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());
server.use(express.json());  // For parsing application/json

export default server;
