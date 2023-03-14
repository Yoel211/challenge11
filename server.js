const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// GET Route for index page
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes html page
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT} 🚀`));
