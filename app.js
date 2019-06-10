const express = require("express");
const app = express();

app.get("/postss", (req,res) =>  {
  res.send({
    name: "Manvi",
    email: "manvibhardwaj.com",
    Rollno: "43534545"
  })
})
app.post('/p',(req,res)=>{
  res.redirect('/postss');
})
app.put('/user',function(req,res){
  res.send('got a put request at /user');
})

app.delete('/user',function(req,res){
  res.send('got a delete request at /user');
})
app.listen(3006, function(){
   console.log("Server is running on port 3006")
})
