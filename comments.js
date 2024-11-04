// Create web server
const express = require('express');
const app = express();
const port = 3001;

// Create a connection to the database
const { Client } = require('pg');
const client = new Client