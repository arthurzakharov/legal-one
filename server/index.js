const express = require('express');
const bodyParser = require('body-parser');
const baseRoutes = require('./routes/base');
const agentRoutes = require('./routes/agent');
const callRoutes = require('./routes/call');
const notFoundController = require('./controllers/error');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/agent', agentRoutes);
app.use('/api/call', callRoutes);
app.use('/api', baseRoutes);
app.use(notFoundController.get404);

app.listen(port, () => console.log(`Listening on port ${port}`));
