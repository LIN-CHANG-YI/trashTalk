const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalk = require('./generator_trashTalk.js')
const Handlebars = require("handlebars")
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
Handlebars.registerHelper('if_same', (job, currentJob, options) => {
  if (job === currentJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const job = req.body.target
  const generator = trashTalk(job)
  res.render('index', { job, generator })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})