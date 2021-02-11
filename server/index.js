const express = require('express');
const bodyParser = require('body-parser');
const agentRoutes = require('./routes/agent');
const generalReportRoutes = require('./routes/general-report');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/agent', agentRoutes);
app.use('/', generalReportRoutes);

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
