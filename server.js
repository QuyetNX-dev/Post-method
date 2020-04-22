
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
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.render('index.pug',{
    todos
  })
});

app.get("/todos", (req, res) => {
  if(req.query.q){
    var q = req.query.q;
    var matchedTodo = todos.filter(item => {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('todos.pug',{
      todos : matchedTodo
    })
  }
  res.send(`
    <h1 style='text-align: center;'>Vui lòng nhập Url theo /todos?q=</h1>
    <a style='display: block; text-align: center' href='/todos?q=nấu'>xem demo</a>
  `)
});

app.post('/todos/create',(req, res) => {
  if(req.body.name !== ""){
    let user = {id: todos.length + 1, name: req.body.name}
    todos.push(user);
    res.redirect('back')
  }
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
