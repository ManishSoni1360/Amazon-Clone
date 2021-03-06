const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');

const stripe = require('stripe');
const { request } = require('express');
const { response } = require('express');
('sk_test_51J5tgTSJ77arJUbKGwV8ie9Sdhhs8uyp9GlpinjHk6NAJii3uKzvgbF7QI9uMCctihy32hh6fax6fbsIt4b9zDIF00coA4yYYj')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world!'))
app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received >>>", total);
})

// listen command
exports.api = functions.https.onRequest(app)