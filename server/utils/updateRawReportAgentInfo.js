module.exports = (dataRaw, dataAgent) => {
  const data = dataRaw.map((d) => {
    const agent = dataAgent.find((a) => a.identifier === d.agent);
    if (agent) {
      return {...d, agent};
    } else {
      return null;
    }
  });
  return data.every((d) => d !== null) ? data : null;
};
