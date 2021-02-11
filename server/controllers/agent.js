const pathToFile = require('../utils/pathToFile');
const readJson = require('../utils/readJson');
const formatResponse = require('../utils/formatResponse');
const updateDataWithField = require('../utils/updateDataWithField');

exports.getAgentById = (req, res) => {
  /**
   * Basically logic above is the replace of for example Mongo aggregation pipelines on different collections
   * or some join tables from some sequel DBs. Sort can also be done on frontend. But we can save 1 request here
   * and make hard calculations on server side to respect client and make less effort for his machine
   */
  const agentIdentifier = req.params.id;
  readJson(pathToFile.logs, (errLogs, dataLogs) => {
    if (errLogs) {
      return res.status(500).json(formatResponse('Logs file read failure', errLogs));
    }
    readJson(pathToFile.resolution, (errResolution, dataResolution) => {
      if (errResolution) {
        return res.status(500).json(formatResponse('Resolutions file read failure', errResolution));
      }
      const dataFilteredByAgent = dataLogs.filter(
        (dataLog) => dataLog.agentIdentifier.toString() === agentIdentifier.toString()
      );
      const formattedData = updateDataWithField(
        {dataRawSource: dataFilteredByAgent, dataRawKey: 'identifier'},
        {dataToAddSource: dataResolution, dataToAddKey: 'identifier'}
      );
      if (formattedData.length) {
        return res.status(200).json(formatResponse(`Agent ${agentIdentifier} report`, formattedData));
      } else {
        return res.status(404).json(formatResponse('Some agent or resolution ID not found', null));
      }
    });
  });
};
