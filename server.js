const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;
const waifus = require('./routes/api/waifus');


app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

// USe Routes
app.use('/api/waifus', waifus);

app.listen(port, () => console.log(`server started on port ${port}`));