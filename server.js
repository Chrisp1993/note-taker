const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const app = express();

// read incoming info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// linking the file resources to localhost
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.  Visit: http://localhost:3001`);
});