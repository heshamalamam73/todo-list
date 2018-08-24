var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000,
    bodyParser =require("body-parser");
    
    
    
    
var todoRoutes = require("./routes/todos");    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(express.static(__dirname +'/views'));  // for reading html files
    app.use(express.static(__dirname +'/public'));// for reading css files
    
    
    app.get('/', function(req,res){
        res.sendFile('index.html');
    });
 app.use('/api/todos', todoRoutes);   // important to no should write /api/todo all time just write / and it will be automaticlly /api/todos
    app.listen(port , function(){
        console.log('app is running on port ' + process.env.PORT);
    });