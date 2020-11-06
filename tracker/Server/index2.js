const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const users = require('./routes/users');
const kittys = require('./routes/kittys');
const auth = require('./routes/auth')


connectDB();

app.use(express.json());
app.use('/api/users', users);
app.use('/api/kittys', kittys);
app.use('/api/auth', auth);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})