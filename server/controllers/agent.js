const pathToFile = require('../utils/pathToFile');
const readJson = require('../utils/readJson');

exports.getAllAgents = (req, res) => {
  readJson(pathToFile.agent, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Fail to load agent',
        payload: err,
      });
    } else {
      res.status(200).json({
        message: 'Get all agent successfully',
        payload: JSON.parse(data),
      });
    }
  });
};

exports.getAgentById = (req, res) => {
  readJson(pathToFile.agent, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Fail to load agent',
        payload: err,
      });
    } else {
      res.status(200).json({
        message: 'Get agent successfully',
        payload: JSON.parse(data),
      });
    }
  });
};
