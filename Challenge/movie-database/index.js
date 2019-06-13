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




app.get('/movies/add' , (req, res) => { // i can use app.post as a verb
  var t =req.query.title
  var y =req.query.year
  var r =req.query.rating
  movies.push({title:t,year:y,rating:r})
  if(t=="" || y==""){
    return(res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'}))
}
else if(y.length !== 4){
    return(res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'}))
}
else if(isNaN(y)){
    return(res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'}))
}
else if(!r || r==''|| isNaN(r)){
    movies.push({title:t,year:y,rating: 4})
    res.send({status:200, data:movies});



}

 
  else{
  res.send({status:200, data:movies})}
}
)

app.get('/movies/read', (req, res) => {
  res.send({ status: 200, data: movies });
});

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
app.get('/movies/update/:ID',(req,res) => { // i can use app.put as a verb
  let nID = req.params.ID
  let nTitle = req.query.title
  let nYear = req.query.year
  let nRating = req.query.rating

  function update(n, b) {
      if(n !== undefined) {
          movies[nID-1][b] = n
      }
  }

  if(nID > 0 && nID <= movies.length ) {
      update(nTitle, 'title')
      update(nYear, 'year')
      update(nRating, 'rating')
      res.send({status:200, data: movies})
  }
  else {
      res.send({status:404, error:true, message:'the movie ID' +'does not exist'})
  }
})
  




  // app.get('/movies/delete/:ID',(req,res) => {
  //   // var f= req.params.ID

  //   // if (f> 0 && f < movies.length ) {
  //   //     movies.splice(f-1, 1)
  //   //     res.send({status:200, data: movies})
  //   // }
  //   // else {
  //   //     res.send({status:404, error:true, message:'the movie <ID> does not exist'})
  //   // }

  //   // })
  app.get('/movies/delete/:id', (req, res) => { // i can use app.delete as a verb
    const ID = req.params.id
   
      if (ID>0 && ID <=movies.length) {
            movies.splice(ID - 1, 1)
            res.send({ status: 200, data: movies })
       }
  else{
    res.send({ status: 404, error: true, message: 'the movie' + ID + 'does not exist' })
  }


});

  
 
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
