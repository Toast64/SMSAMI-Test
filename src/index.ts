const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, "views"));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
//routes

app.use('/', require('./routes/main'));



const PORT = process.env.PORT || 4411;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));