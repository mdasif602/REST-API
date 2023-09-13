const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://asif:mypassword@atlascluster.fzp8upf.mongodb.net/crud?retryWrites=true&w=majority'
const app = express();

mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection;

con.on('open', () =>{
  console.log('Connected to database')
})

app.use(express.json())

const personRouter = require('./routes/persons')

app.use('/api', personRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
