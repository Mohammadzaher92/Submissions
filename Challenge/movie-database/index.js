//import express from 'express';
//import db from './db/db';
const express = require('express')

// Set up the express app
const app = express();
// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
app.get('/',(req,res)=>{
    res.send('ok')
})
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
