const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PROT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const route = require('./server/routes/movieRoutes.js');

app.use('/',route);

app.listen(port,()=> console.log(`Listing on Port ${port}`));
