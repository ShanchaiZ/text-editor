//Required Express server
const express = require('express');


//The port 3001 in use
const app = express();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);


app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
