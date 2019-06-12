//import express from 'express';
//import db from './db/db';
const express = require('express')

// Set up the express app
const app = express();
// array of movies

// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

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

// lo:3000/hello
// lo:3000/hello/jasajdas

app.get('/hello/:id?', (req,res)=>{
    if(req.params.id !== undefined){
     res.send({status:200,message:"Hello , " + req.params.id})}
     else{res.send({status:200,message:"Hello ,"})}
 })
 app.get('/search',(req,res)=>{
    if(req.query.s !== undefined && req.query.s !== ""){
        res.send({status:200, message:"ok", data:req.query.s})
    }
    else {
        res.send({status:500, error:true, message:"you have to provide a search"})
    }

})
app.get('/movies/creat',(req,rest)=>{


})
app.get('/movies/read/by-date',(req,res)=> {
res.send({status:200, data:movies.sort(function(a, b){
  return a.year - b.year })


}) 

})
app.get('/movies/read/by-rating',(req,res)=> {
  res.send({status:200, data:movies.sort(function(a, b){
    return b.rating - a.rating 
  })
  
  
  }) 
})


app.get('/movies/read/by-title',(req,res)=>{
  res.send({status:200, data:
      movies.sort(function(a,b) {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          if(x<y)
            return -1
          else if(x>y)
            return 1
          else 
            return 0;
          //return x < y ? -1 : x > y ? 1 : 0;
          //sort((a, b) => a.title.localeCompare(b.title))

  })
})
})
  
app.get('/movies/edit',(req,res)=> {

}) 

app.get('/movies/delete',(req,res)=> {

}) 
app.get('/movies/read/id/:id',(req,res)=>{
  const ID = req.params.id
  console.log(ID)
  if(ID>0&&ID<=movies.length){
    res.send({status:200, data:movies[ID-1]})
  }else{
    res.send({status:404, error:true, message:'the movie '+ID+  ' does not exist'})
  }
  
})
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
