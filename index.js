const express               = require('express'),
      expressSanitizer      = require('express-sanitizer'),
      mongoose              = require('mongoose'),
      bodyParser            = require('body-parser'),
      methodOverride        = require('method-override'),
      keys                  = require('./config/keys');

// Pull in Schema(s) from model(s)
require('./models/Blog');

const app                   = express();

const Blog = mongoose.model('blog');

// Starter Blog Data
// Blog.create({
//       title: "Test Blog",
//       image: "https://farm3.staticflickr.com/2326/2378867408_4cc90791d6.jpg",
//       body: "JavaScript is this that and the other from another mother.  We love the JS around these parts!"
// });

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSanitizer());
app.use(methodOverride("_method"));
mongoose.connect(keys.mongoURI);


app.get('/', (req,res) => {
      res.send('We have a connection!');
});


if (process.env.NODE_ENV === 'production') {
      // Use production assets
      app.use(express.static('client/build'));

      // Ask express to serve up index.html file if it
      // does not recognize the route.
      const path = require('path');
      app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
      console.log('Server is running on ' + PORT);
});