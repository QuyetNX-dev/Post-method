
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

app.get("/", (req, res) => {
  res.render('index.pug',{
    name: 'Quety'
  })
});

app.get("/", (req, res) => {
  res.render('todos.pug',{
    users: [
      {id: 1, name: 'đẹp trai'},
      
    ]
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
