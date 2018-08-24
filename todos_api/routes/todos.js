var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos.js");


router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodos);
  
  
  
router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.ubdateTodo)
  .delete(helpers.deleteTodo);




module.exports = router;