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
app.get('/test',(req,res)=>{
    res.send({status:200, message:"ok"})
})
var today = new Date()
var TIME = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.get('/time',(req,res)=>{
    res.send({status:200,
         message:TIME})
})
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
