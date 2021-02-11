const pathToFile = require('../utils/pathToFile');
const readJson = require('../utils/readJson');
const formatResponse = require('../utils/formatResponse');
const groupLogsByPhone = require('../utils/groupLogsByPhone');
const updateDataWithField = require('../utils/updateDataWithField');
const updateDataWithUuid = require('../utils/updateDataWithUuid');

exports.getBase = (req, res) => {
  /**
   * Basically logic above is the replace of for example Mongo aggregation pipelines on different collections
   * or some join tables from some sequel DBs. Sort can also be done on frontend. But we can save 1 request here
   * and make hard calculations on server side to respect client and make less effort for his machine
   */
  readJson(pathToFile.logs, (errLog, dataLog) => {
    if (errLog) {
      return res.status(500).json(formatResponse('Logs file read failure', errLog));
    }
    readJson(pathToFile.agent, (errAgent, dataAgent) => {
      if (errAgent) {
        return res.status(500).json(formatResponse('Agents file read failure', errAgent));
      }
      const groupedByPhone = groupLogsByPhone(dataLog);
      const formattedData = updateDataWithField(
        {dataRawSource: groupedByPhone, dataRawKey: 'identifier'},
        {dataToAddSource: dataAgent, dataToAddKey: 'agent'},
        'agent'
      );
      if (formattedData) {
        return res.status(200).json(formatResponse('General report', updateDataWithUuid(formattedData)));
      } else {
        return res.status(404).json(formatResponse('Some agent or log ID not found', null));
      }
    });
  });
};
