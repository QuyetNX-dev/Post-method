
const express = require("express");
const app = express();
var todos = [
  {id: 1, name: 'đẹp trai'},
  {id: 2, name: 'học rốt vl'},
  {id: 3, name: 'tốt bụng'},
  {id: 4, name: 'nấu ăn ngon'}
]
app.set('view engine', 'pug');
app.set('views', './views')

app.get("/", (req, res) => {
  res.render('index.pug',{
    name: 'Quety'
  })
});

app.get("/todos", (req, res) => {
  if(req.query.q){
    var q = req.query.q;
    matched
  }
  res.render('todos.pug',{
    todos
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
