const express = require('express');
const bodyParser = require('body-parser');
const baseRoutes = require('./routes/base');
const agentRoutes = require('./routes/agent');
const callRoutes = require('./routes/call');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/agent', agentRoutes);
app.use('/call', callRoutes);
app.use('/', baseRoutes);

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
