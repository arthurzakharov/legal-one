import React, {useState, useEffect} from 'react';
import {API} from '../../axios';
import {useParams} from 'react-router-dom';
import DataTable from '../data-table/data-table.component';
import {formatDate} from '../../utils';

const AgentTable = () => {
  const [tableData, setTableData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    (async function loadReport() {
      try {
        const {data, status} = await API.get(`/agent/${id}`);
        if (status === 200) {
          setTableData(
            data.reduce((arr, item) => {
              arr.push({
                number: item.number,
                dateTime: formatDate(item.dateTime),
                resolution: item.resolution.resolution,
                id: item.identifier,
              });
              return arr;
            }, [])
          );
        }
      } catch (e) {
        console.log('e: ', e);
      }
    })();
  }, []);

  const tableColumns = [
    {
      title: 'Phone number',
      id: 'number',
    },
    {
      title: 'Call time',
      id: 'dateTime',
    },
    {
      title: 'Resolution',
      id: 'resolution',
    },
  ];

  return <DataTable columns={tableColumns} data={tableData} />;
};

export default AgentTable;
