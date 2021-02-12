import React, {useState, useEffect} from 'react';
import {API} from '../../axios';
import {useParams, useHistory} from 'react-router-dom';
import DataTable from '../data-table/data-table.component';
import {formatDate} from '../../utils';
import AgentLook from '../agent-look/agent-look';

const CallTable = () => {
  const [tableData, setTableData] = useState([]);
  const {phone} = useParams();
  const history = useHistory();

  useEffect(() => {
    (async function loadReport() {
      try {
        const {data, status} = await API.get(`/call/${phone}`);
        if (status === 200) {
          setTableData(
            data.reduce((arr, item) => {
              arr.push({
                agent: () => <AgentLook {...item.agent} onClick={(id) => history.push(`/agent/${id}`)} />,
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
      title: 'Agent',
      id: 'agent',
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

export default CallTable;
