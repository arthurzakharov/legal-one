import React, {useEffect} from 'react';
import {API} from '../../axios';

const ReportTable = () => {
  useEffect(() => {
    (async function loadReport() {
      try {
        const response = await API.get('/');
        console.log('response: ', response);
      } catch (e) {
        console.log('e: ', e);
      }
    })();
  }, []);
  return <div>report table</div>;
};

export default ReportTable;
