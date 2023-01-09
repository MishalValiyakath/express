const express = require('express');
const app = express();
const PORT = process.env.PORT 

app.get('/', (req,res) => {
  res.send('Hello World from Azure AppService');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
});