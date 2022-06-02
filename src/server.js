// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})