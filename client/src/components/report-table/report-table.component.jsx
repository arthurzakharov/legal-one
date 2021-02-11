import React, {useState, useEffect} from 'react';
import styles from './report-table.module.scss';
import {API} from '../../axios';
import ReportTableRow from '../report-table-row/report-table-row.component';

const ReportTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function loadReport() {
      try {
        const {data, status} = await API.get('/');
        console.log('data: ', data);
        if (status === 200) {
          setData(data);
        }
      } catch (e) {
        console.log('e: ', e);
      }
    })();
  }, []);
  return (
    <table className={styles.ReportTable}>
      <thead>
        <tr className={styles.ReportTableHeaderRow}>
          <th className={styles.ReportTableHeaderCell}>
            <b>Phone number</b>
          </th>
          <th className={styles.ReportTableHeaderCell}>
            <b>Number of calls</b>
          </th>
          <th className={styles.ReportTableHeaderCell}>
            <b>Last call</b>
          </th>
          <th className={styles.ReportTableHeaderCell}>
            <b>Agent</b>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <ReportTableRow key={d.identifier} {...d} />
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
