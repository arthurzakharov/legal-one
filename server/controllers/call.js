const pathToFile = require('../utils/pathToFile');
const readJson = require('../utils/readJson');
const formatResponse = require('../utils/formatResponse');
const updateDataWithField = require('../utils/updateDataWithField');

exports.getCallById = (req, res) => {
  /**
   * Basically logic above is the replace of for example Mongo aggregation pipelines on different collections
   * or some join tables from some sequel DBs. Sort can also be done on frontend. But we can save 1 request here
   * and make hard calculations on server side to respect client and make less effort for his machine
   */
  const number = `+${req.params.number}`;
  readJson(pathToFile.logs, (errLogs, dataLogs) => {
    if (errLogs) {
      return res.status(500).json(formatResponse('Logs file read failure', errLogs));
    }
    readJson(pathToFile.agent, (errAgent, dataAgent) => {
      if (errAgent) {
        return res.status(500).json(formatResponse('Agent file read failure', errAgent));
      }
      readJson(pathToFile.resolution, (errResolution, dataResolution) => {
        if (errResolution) {
          return res.status(500).json(formatResponse('Resolutions file read failure', errResolution));
        }
        const dataFilteredByNumber = dataLogs.filter((dataLog) => dataLog.number.toString() === number.toString());
        if (dataFilteredByNumber.length) {
          const dataWithAgent = updateDataWithField(
            {dataRawSource: dataFilteredByNumber, dataRawKey: 'agentIdentifier'},
            {dataToAddSource: dataAgent, dataToAddKey: 'identifier'},
            'agent'
          );
          if (dataWithAgent) {
            const dataWithResolution = updateDataWithField(
              {dataRawSource: dataWithAgent, dataRawKey: 'identifier'},
              {dataToAddSource: dataResolution, dataToAddKey: 'identifier'},
              'resolution'
            );
            if (dataWithResolution) {
              return res.status(200).json(formatResponse(`Phone ${number} report`, dataWithResolution));
            } else {
              return res.status(404).json(formatResponse('By resolution ID not found', null));
            }
          } else {
            return res.status(404).json(`By agent ID not found`, null);
          }
        } else {
          return res.status(404).json(formatResponse(`By phone ${number} not found`, null));
        }
      });
    });
  });
};
