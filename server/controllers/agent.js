const pathToFile = require('../utils/pathToFile');
const readJson = require('../utils/readJson');
const formatResponse = require('../utils/formatResponse');

exports.getAllAgents = (req, res) => {
  readJson(pathToFile.agent, (err, data) => {
    if (err) {
      return res.status(500).json(formatResponse('Agents load failure', err));
    }
    return res.status(200).json(formatResponse('Agents found', data));
  });
};

exports.getAgentById = (req, res) => {
  console.log(req.params.id);
  const agentId = req.params.id;
  readJson(pathToFile.agent, (err, data) => {
    if (err) {
      return res.status(500).json(formatResponse('Agent load failure', err));
    }
    const agent = data.find((d) => d.identifier.toString() === agentId.toString());
    if (agent) {
      return res.status(200).json(formatResponse('Agent found', agent));
    } else {
      return res.status(404).json(formatResponse(`Agent with ID:${agentId} not found`, null));
    }
  });
};
