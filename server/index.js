const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const baseRoutes = require('./routes/base');
const agentRoutes = require('./routes/agent');
const callRoutes = require('./routes/call');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/agent', agentRoutes);
app.use('/api/call', callRoutes);
app.use('/api', baseRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
