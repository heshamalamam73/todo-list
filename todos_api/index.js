var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000;
var todoRoutes = require("./routes/todos");    
    
    
    
    
    
    app.get('/', function(req,res){
        res.send('hi there from express ');
    });
 app.use('/api/todos', todoRoutes);   // important to no should write /api/todo all time just write / and it will be automaticlly /api/todos
    app.listen(port , function(){
        console.log('app is running on port ' + process.env.PORT);
    });