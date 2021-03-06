const express = require('express');
const cohortRouter = require('./routers/cohortRouter');
const studentRouter = require('./routers/studentRouter');

const server = express();
const PORT = 5000;

server.use(express.json());

server.use('/api/cohorts', cohortRouter);
server.use('/api/students', studentRouter);

server.get('/', (req, res) => {
    res.send('API is Active');
  })

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}\n`);
});