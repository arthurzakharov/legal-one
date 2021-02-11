module.exports = ({dataRawSource, dataRawKey}, {dataToAddSource, dataToAddKey}) => {
  const data = dataRawSource.map((dataRaw) => {
    const item = dataToAddSource.find((dataToAdd) => dataToAdd[dataRawKey] === dataRaw[dataToAddKey]);
    if (item) {
      return {...dataRaw, item};
    } else {
      return null;
    }
  });
  return data.every((d) => d !== null) ? data : null;
};
