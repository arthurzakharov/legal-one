import React, {useState, useEffect} from 'react';
import {API} from '../../axios';
import {useHistory, Link} from 'react-router-dom';
import DataTable from '../data-table/data-table.component';
import {formatDate} from '../../utils';
import AgentLook from '../agent-look/agent-look';

const ReportTable = () => {
  const [tableData, setTableData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    (async function loadReport() {
      try {
        const {data, status} = await API.get('/');
        if (status === 200) {
          setTableData(
            data.reduce((arr, item) => {
              arr.push({
                number: () => <Link to={`/call/${item.number.substring(1)}`}>{item.number}</Link>,
                callsCount: item.callsCount,
                lastCallTime: formatDate(item.lastCallTime),
                agent: () => <AgentLook {...item.agent} onClick={(id) => history.push(`/agent/${id}`)} />,
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
      title: 'Number of calls',
      id: 'callsCount',
    },
    {
      title: 'Last call time',
      id: 'lastCallTime',
    },
    {
      title: 'Agent',
      id: 'agent',
    },
  ];

  return <DataTable columns={tableColumns} data={tableData} />;
};

export default ReportTable;
