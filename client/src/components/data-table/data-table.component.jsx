import React from 'react';
import PropTypes from 'prop-types';
import styles from './data-table.module.scss';
import {componentHandler} from '../../utils';

const DataTable = ({columns, data}) => {
  return (
    <table className={styles.DataTable}>
      <thead>
        <tr className={styles.DataTableHeaderRow}>
          {columns.map(({id, title}) => (
            <th key={id} className={styles.DataTableHeaderCell}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className={styles.DataTableBodyRow}>
            {columns
              .map((c) => c.id)
              .map((key) => (
                <td key={key} className={styles.DataTableBodyCell}>
                  <div>{componentHandler(item[key])}</div>
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DataTable;
