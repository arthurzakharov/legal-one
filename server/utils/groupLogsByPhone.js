const compareDate = require('./compareDate');

module.exports = (data) => {
  return data.reduce((arr, item) => {
    const itemNumber = item.number;
    const itemAgentID = item.agentIdentifier;
    const itemTime = item.dateTime;
    const numberIndex = arr.findIndex((a) => a.number === itemNumber);
    if (numberIndex !== -1) {
      const recentCall = arr[numberIndex].lastCallTime;
      const recentAgent = arr[numberIndex].agent;
      arr[numberIndex] = {
        number: itemNumber,
        callsCount: arr[numberIndex].callsCount + 1,
        lastCallTime: compareDate(itemTime, recentCall) ? itemTime : recentCall,
        agent: compareDate(itemTime, recentCall) ? itemAgentID : recentAgent,
      };
    } else {
      arr = [
        ...arr,
        {
          number: itemNumber,
          callsCount: 1,
          lastCallTime: itemTime,
          agent: itemAgentID,
        },
      ];
    }
    return arr;
  }, []);
};
