const express = require('express');
const routes= require("./src/routes");
const app = express();
const port = 3000;
app.use('/api/v1/data',routes);


app.listen(port,()=>console.log(`App is running on ${port}`));
