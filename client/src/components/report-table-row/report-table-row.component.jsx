import React from 'react';
import PropTypes from 'prop-types';
import styles from './report-table-row.module.scss';
import {formatDate, getAgentName} from '../../utils';

const ReportTableRow = (props) => {
  return (
    <tr className={styles.ReportTableRow}>
      <td className={styles.ReportTableCell}>
        <span>{props.number}</span>
      </td>
      <td className={styles.ReportTableCell}>
        <span>{props.callsCount}</span>
      </td>
      <td className={styles.ReportTableCell}>
        <span>{formatDate(props.lastCallTime)}</span>
      </td>
      <td className={styles.ReportTableCell}>
        <span>{getAgentName(props.agent)}</span>
      </td>
    </tr>
  );
};

ReportTableRow.propTypes = {
  identifier: PropTypes.string,
  agent: PropTypes.object,
  callsCount: PropTypes.number,
  lastCallTime: PropTypes.instanceOf(Date),
  number: PropTypes.string,
};

export default ReportTableRow;
